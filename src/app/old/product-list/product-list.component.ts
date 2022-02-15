import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any;
  disableSelect!:boolean ;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.productList = [
      {name:'ABC',
       select:[
         {name:'option1',value:'1'},
         {name:'option2',value:'2'},
         {name:'option3',value:'3'},
         {name:'option4',value:'4'},
        ],
        disable:false
      },
      {name:'DEF',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true

      },
      {name:'GHI',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true

      },
      {name:'JKL',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true

      },
      {name:'MNO',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true

      },
      {name:'PQR',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true
      },
      {name:'STU',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true

      },
      {name:'VWX',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true

      },
      {name:'YZA',
      select:[
        {name:'option1',value:'1'},
        {name:'option2',value:'2'},
        {name:'option3',value:'3'},
        {name:'option4',value:'4'},
       ],
       disable:true
      },
    ]
  }


  move(data:any){
    if(data.name == 'ABC'){
      this.router.navigate(['view'])
    }
  }

}
