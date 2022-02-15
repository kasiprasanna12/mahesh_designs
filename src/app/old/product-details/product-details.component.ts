import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProjectIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeProjectTab() {
    this.selectedProjectIndex = 0;
  }

}
