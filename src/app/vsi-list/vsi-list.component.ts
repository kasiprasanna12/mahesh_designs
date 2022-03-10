import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadVsiComponent } from '../pages/upload-vsi/upload-vsi.component';
import { UserService } from '../user.service';
import { Car } from './vsi';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-vsi-list',
  templateUrl: './vsi-list.component.html',
  styleUrls: ['./vsi-list.component.scss']
})
export class VSIListComponent implements OnInit {
  productList: any;
  datasList!:any[]
  disableSelect!: boolean;
  content:any = "VSI Version #";
  open:boolean = false;
  displayModal = false;
  carCode:any;
  validate:boolean = false
  uniqueCfc: any;
  selectedVSI: any = 'VSI Version #';
  selectedIndex:any;
  constructor(private router: Router,
              private service:UserService,
              private dialog:MatDialog,
              public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.service.getVSI().subscribe(
      (res: any) => {
        this.datasList = []        
        this.uniqueCfc = [...new Set(res.data.map((item: any) => item.cfc))];
        this.uniqueCfc.forEach((uniqueCfc: any) => {
          let vsiVersion: any[] = []
          res.data.forEach((element: any) => {
            if (uniqueCfc == element.cfc) {
              vsiVersion.push({
                vsi_version:element.vsi_version,
                fuelType:element.fuel_type,
                release_date:this.datepipe.transform(new Date(element.release_date.split('T')[0]), 'yyyy/MM/dd')
              })              
              // (element.vsi_version + '|' + this.datepipe.transform(new Date(element.release_date.split('T')[0]), 'yyyy/MM/dd'))
            }
          })
          this.datasList.push({
            cfc: uniqueCfc,
            vesrsions: vsiVersion,
            selectedValue: "VSI Version #",
          })
        })
      });
  }

  move() {
    if(this.selectedVSI != 'VSI Version #'){
      this.service.vsiListData = this.datasList
      this.router.navigate(['entry/main',this.selectedVSI,this.selectedIndex]);
    }
  }
  
  
  select(value:any){
    this.datasList.map((e:any)=>{
      if(this.datasList.indexOf(value) ==this.datasList.indexOf(e)){
        e.viewValue = !e.viewValue;
      }
      else{
        e.viewValue = false;
      }
    })
  }
  
  // Changing the background color based on the select option
  changeValue(value:any,sel:any,index:any){
    this.service.selectedVsi = value
    this.service.selectedVsi['fuelType'] = sel.fuelType
    this.service.sendLocalData(sel)
    this.datasList.map((e:any)=>{
      if(this.datasList.indexOf(value) == this.datasList.indexOf(e)){
        e.selectedValue =`${sel.vsi_version} | ${sel.release_date}` 
      }
      e.viewValue = false;
    })
    this.selectedVSI = sel.vsi_version;
    this.selectedIndex = index;
  }


  //upload VSI dialog

  upload(){
    const dialogRef = this.dialog.open(UploadVsiComponent,{
      data:'',
      width:'900px'
    })
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showVal(value:string){
    if(value.length == 4){
      this.validate = true;
    }
    else{
      this.validate = false;
    }
  }

  add(){
    let postData = {
      cfcCode: this.carCode
    }
    this.service.createCFC(postData).subscribe(
      (res:any)=>{
        console.log(res)
      },
      err=>{
        console.log(err)
        this.displayModal=false
      }
    )
  }
}
