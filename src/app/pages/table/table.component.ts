import { Component, OnInit } from '@angular/core';
import { CustomerService } from '././customerservice';
// import { Customer } from '././customer';
import {MessageService} from 'primeng/api';

interface City {
  name: string
}
interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [MessageService],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  customers: any;
  cities: City[];

  checked: boolean = false;
  myselection: any;


  constructor(private customerService: CustomerService) { 
    
    this.cities = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'}
  ];

  

  }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => {
        this.customers = data
    });
    
  }

}
