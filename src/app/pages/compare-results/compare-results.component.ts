import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { filter, keys } from 'lodash';
import { KataShiki } from 'src/app/classes/katashiki';
import { UserService } from 'src/app/user.service';

//
import { ProductService } from './productservice';
import {Product} from './product';

@Component({
  selector: 'compare-results',
  templateUrl: './compare-results.component.html',
  styleUrls: ['./compare-results.component.scss']
})
export class CompareResultsComponent implements OnInit {
  @Output() mySelection = new EventEmitter();
  @Input() versionID: any;
  katashikiList: KataShiki[] = []
  katashikiLength: any;
  pageNumber: number = 1;
  pageSize: number = 4;
  total: any = []
  disableContent: boolean = false;
  pageNationTotal: any;
  filterValue: any;
  pageFilter: any = '';
  paginationArray: any = []
  myArray: any = []
  paginationValue: any = []
  totalCount: any;

  //
  currentPage = 1;
  numberPerPage = 4;
  numberOfPages = 1;
  showCompareResults = false;


//
products: Product[] | any;
responsiveOptions : any [];

  constructor(
    private router: Router,
    private service: UserService,
    private productService: ProductService) {
      this.service.$onchangeOfCarfamily.subscribe((data:any)=>{
        // alert(data)
        this.katashikiList  = []
        this.versionID = data
        this.getAPIData()
      })



      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

  }

  ngOnInit(): void {
    // alert('bottom'+ this.versionID)
    this.getAPIData();

    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
  }

  getAPIData() {
    this.showCompareResults = false
    this.service.getvsiVersion(this.versionID).subscribe(
      (res: any) => {
        this.showCompareResults = true
        this.pageNationTotal = res.data.length;
        this.filterValue = res.data;
        this.katashikiList = res.data;
        this.numberOfPages = this.getNumberOfPages();
        var begin = ((this.currentPage - 1) * this.numberPerPage);
        var end = begin + this.numberPerPage;
        this.paginationArray = this.katashikiList.slice(begin, end);
        this.katashikiLength = this.katashikiList.length;
        this.loadList();
      }
    )

    this.service.getLocalData().subscribe(
      (res: any) => {
        //Filter the object values based on the selection value
        this.pageFilter = res;
        let filteredValue = this.katashikiList.filter((item: any) => {
          let notMatchingField = Object.keys(res)
            .find((key: any) => item[key] !== res[key]);

          return !notMatchingField; // true if matches all fields
        });
        this.katashikiList = filteredValue;
        this.numberOfPages = this.getNumberOfPages();
        var begin = ((this.currentPage - 1) * this.numberPerPage);
        var end = begin + this.numberPerPage;
        this.paginationArray = this.katashikiList.slice(begin, end);
        this.katashikiLength = this.katashikiList.length;
        this.loadList();
      }
    )
  }

  selectbuild(data:any) {
    console.log(data)
    this.service.selectedBuild = data
    this.mySelection.emit('true')
    this.router.navigate(['entry/selection']);
  }

  getNumberOfPages() {
    return Math.ceil(this.katashikiList.length / this.numberPerPage);
  }


  previous() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.loadList()
    }
  }

  next() {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage += 1;
      this.loadList()
    }
  }

  loadList() {
    var begin = ((this.currentPage - 1) * this.numberPerPage);
    var end = begin + this.numberPerPage;
    this.paginationArray = this.katashikiList.slice(begin, end);
    this.drawList()
  }

  drawList() {
    this.myArray = []
    for (let i = 0; i < this.paginationArray.length; i++) {
      this.myArray.push(this.paginationArray[i])
    }
    this.paginationValue = new Array();
    for (let r = this.myArray.length - 1; r >= 0; r--) {
      this.paginationValue.push(this.myArray[r])
    }
    let firstValue = this.katashikiList.indexOf(this.myArray[0]) + 1;
    let lastValue = this.katashikiList.indexOf(this.paginationValue[0]) + 1;
    this.totalCount = `${firstValue} to ${lastValue} of ${this.katashikiLength}`
  }

}
