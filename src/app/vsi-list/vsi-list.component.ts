import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vsi-list',
  templateUrl: './vsi-list.component.html',
  styleUrls: ['./vsi-list.component.css']
})
export class VSIListComponent implements OnInit {

  productList: any;
  disableSelect!: boolean;
  content:any = "VSI Version #";
  open:boolean = false;
  displayModal = false;
  constructor(private router: Router,
              private service:UserService) {}

  ngOnInit(): void {
    //get product list from api
    this.service.getProducts().subscribe(
      (res:any) =>{
        this.productList = res.data
      }
    )
  }

  move(data: any) {
    if(data.selectedValue != 'VSI Version #'){
      this.router.navigate(['/entry'])
    }
  }
  
  
  select(value:any){
    this.productList.map((e:any)=>{
      if(value.id == e.id){
        e.viewValue = !e.viewValue
      }
      else{
        e.viewValue = false
      }
    })
  }
  
  // Changing the background color based on the select option
  changeValue(value:any,sel:any){
    this.productList.map((e:any)=>{
      if(e.id == value.id){
        e.selectedValue = sel.option
      }
      e.viewValue = false
    })
  }
  showModalDialog() {
    this.displayModal = true;
  }
}
