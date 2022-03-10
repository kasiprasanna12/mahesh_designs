import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class HeaderSubNavComponent implements OnInit {
  
  selectedProjectIndex:number =0;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeProjectTab() {
    this.selectedProjectIndex = 0;
  }

}
