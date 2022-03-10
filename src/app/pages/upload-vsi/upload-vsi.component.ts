import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { UserService } from 'src/app/user.service';

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
  count = 0;
  percentage:any;

  constructor(private service:UserService,
              public dialogRef: MatDialogRef<UploadVsiComponent>) { }

  ngOnInit(): void {
  }

  change(){
    this.dropdown = !this.dropdown;
  }

  select(e:any){
    this.dropdown = !this.dropdown;
  }

  getFile(e:any){
    console.log(e)
  }

  next(){
    this.count += 1;
  }

  back(){
    this.count -=1;
  }

  toggleHover(event: any) {
    console.log(event)
    this.isHovering = event;
  }

  onDrop(files: any) {
    console.log(files)
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
      }
    )
  }

}
