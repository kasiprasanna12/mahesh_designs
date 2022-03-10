import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedProjectIndex:number =0;
  public isMenuCollapsed = true;
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeProjectTab() {
    this.selectedProjectIndex = 0;
  }


}
