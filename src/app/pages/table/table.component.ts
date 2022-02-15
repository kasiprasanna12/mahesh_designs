import { Component, OnInit } from '@angular/core';
import { CustomerService } from '././customerservice';
// import { Customer } from '././customer';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [MessageService],
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => {
        this.customers = data
    });
    
  }

}
