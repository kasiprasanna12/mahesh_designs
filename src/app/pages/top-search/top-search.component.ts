import { Component, OnInit } from '@angular/core';
interface City {
  name: string
}
@Component({
  selector: 'top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.scss']
})
export class TopSearchComponent implements OnInit {

  cities: City[];
  selectedCity1: City | undefined;

  constructor() { 
      this.cities = [
        {name: 'New York'},
        {name: 'Rome'},
        {name: 'London'},
        {name: 'Istanbul'},
        {name: 'Paris'}
    ];
  }

  ngOnInit(): void {
  }

}
