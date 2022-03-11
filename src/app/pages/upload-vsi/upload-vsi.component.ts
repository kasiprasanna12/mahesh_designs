import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { UserService } from 'src/app/user.service';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-vsi',
  templateUrl: './upload-vsi.component.html',
  styleUrls: ['./upload-vsi.component.scss']
})
export class UploadVsiComponent implements OnInit {

  dropdown:boolean = false;
  dropzoneActive:boolean = false;
  isHovering:boolean = false;
  files:any = []
  vsiFile:any = '';
  metrixFile:any = '';
  count = 0;
  percentage:any;
  cfcList:any = [];
  selectedCfc: any = "Select Car Family Code";
  selectedInput:any = "";
  uploadURLMap: any = {};
  versionInput:any = '';
  stepper = {
    cfc:'',
    version:'',
    document:'',
    validation:""
  }
  versionForm!:FormGroup;
  documentForm!:FormGroup;

  constructor(private service:UserService,
              public dialogRef: MatDialogRef<UploadVsiComponent>,
              private fb:FormBuilder,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.service.getCfcList().subscribe((res: any) => {
      this.cfcList = Object.keys(res?.data ?? {});
    });

    this.versionForm = this.fb.group({
      versionControl:['']
    })

    this.documentForm = this.fb.group({
      metrixControl:[''],
      vsiControl:['']
    })

  }

  change(){
    this.dropdown = !this.dropdown;
  }

  select(e:any){
    console.log(e)
    this.dropdown = !this.dropdown;
    this.selectedCfc = e;
    this.selectedInput = e;
  }

  cfcBtn(){
    if (!this.uploadURLMap[this.selectedCfc]) {
      this.service.getVsiUploadURLs(this.selectedCfc).subscribe((val: any) => {
        this.uploadURLMap[this.selectedCfc] = val.data;
      });
    }
    this.count += 1;
    let x = this.versionForm.value;
    this.stepper = {
      cfc:this.selectedInput,
      version:x.versionControl,
      document:this.vsiFile,
      validation:""
    }
  }

  readVsiFile(event: any) {
    const file = event.target.files[0];
    this.vsiFile = file;
  }

  readSetMatrixFile(event: any) {
    const file = event.target.files[0];
    this.metrixFile = file;
  }

  getFile(e:any){
    console.log(e)
  }

  next(){
    this.count += 1;
    let x = this.versionForm.value;
    this.stepper = {
      cfc:this.selectedInput,
      version:x.versionControl,
      document:this.vsiFile,
      validation:""
    }
    if(this.count == 4){
     this.dialogRef.close()
    }
  }

  fork(){
    console.log('d')
    this.count += 1;
    let x = this.versionForm.value;
    this.stepper = {
      cfc:this.selectedInput,
      version:x.versionControl,
      document:this.vsiFile,
      validation:""
    }
    const response1 = this.http.put(this.uploadURLMap[this.selectedCfc].vsiURL, this.vsiFile,
      { headers: new HttpHeaders({
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "x-api-key": "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB"
      })})
    const response2 = this.http.put(this.uploadURLMap[this.selectedCfc].setMatrixURL, this.metrixFile,
      { headers: new HttpHeaders({
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "x-api-key": "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB"
      })});
    forkJoin([response1,response2])
      .subscribe((res:any)=> {
        console.log(res)
        this.service.decoder(res).subscribe(
          (x:any)=>{
            console.log(x)
          }
        )
      });
  }

  back(){
    this.count -=1;
  }

  toggleHover(event: any) {
    this.isHovering = event;
  }

  onDrop(files: any) {
    this.files = files;
    for(let i=0;i<=this.files.length;i++){
      var fileName = this.files[i].name;
      var fileExtension = fileName.split('.').pop();
      this.files[i].fileExtension = fileExtension
    }
  }

  browse(e:any){
    this.files = e.target.files;
    for(let i=0;i<=this.files.length;i++){
      var fileName = this.files[i].name;
      var fileExtension = fileName.split('.').pop();
      this.files[i].fileExtension = fileExtension
    }
  }

  upload(){
    let fileData = {
      fileName:'',
      fileExtension:'',
      size:''
    }
    this.dialogRef.close()
    this.service.uploadFile(fileData).subscribe(
      (res:any)=>{
        console.log(res)
      },
      (err:any)=>{
        console.log(err)
      }
    )
  }

}
