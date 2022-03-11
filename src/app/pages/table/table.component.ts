import { Component, OnInit } from '@angular/core';
import { CustomerService } from '././customerservice';
// import { Customer } from '././customer';
import { MessageService } from 'primeng/api';
import { MatrixDialogComponent } from 'src/app/matrix-dialog/matrix-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ToyotaConstant } from 'src/app/vsi-list/toyota.model';

interface City {
  name: string
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
  selectedCity1: City | undefined;
  checked: boolean = false;
  myselection: any;
  vehicleConfigiration: any;
  // toyotaConstant!:ToyotaConstant
  constructor(private customerService: CustomerService,
    public userService: UserService,
    public dialog: MatDialog,
    private router: Router) {
    this.cities = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];

    this.userService.$onchangeSpecification.subscribe(data => {
      this.getvehicleConfiguration(data)
    })
  }

  ngOnInit() {
    // this.getvehicleConfiguration('over')



    this.customerService.getCustomersMedium().then(data => {
      this.customers = data
    });

  }

  open() {
    const dialogRef = this.dialog.open(MatrixDialogComponent, {
      data: '',
      width: '150vw'
    })
  }
  getvehicleConfiguration(typeList: any) {
    let AllList = ['A', 'B', 'D', 'E', 'G', 'J', 'K', 'L', 'N', 'P', 'R', 'T', 'U']
    this.userService.getvehicleConfigurationData(this.userService.selectedBuild).subscribe((data: any) => {
      console.log(data)
      this.vehicleConfigiration = []
      let mainheading: any
      if (typeList[0] == 'over') {
        mainheading = Object.keys(data.data)
      } else if (typeList[0] == 'Un') {
        var unique = mainheading.filter(function (obj: any) { return AllList.indexOf(obj) == -1; });
        mainheading = unique
      } else {
        mainheading = typeList
      }
      mainheading.forEach((main: any) => {
        let subheading = Object.keys(data.data[main])
        subheading.forEach((sub: any) => {
          let lowerheading = Object.keys(data.data[main][sub])
          lowerheading.forEach((lower: any) => {
            this.vehicleConfigiration.push(data.data[main][sub][lower])
          })
        })
      })
      console.log(this.vehicleConfigiration)
    })
  }

  checkObject(data: any) {
    return Object.keys(data).length ? true : false
  }
}
