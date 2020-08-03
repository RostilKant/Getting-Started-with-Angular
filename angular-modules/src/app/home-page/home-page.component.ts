import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <h1 appColor>{{ 'Home page' | pageName }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Alias blanditiis impedit laborum, libero nulla sequi similique tempore. 
    Expedita, inventore repellendus!</p>
  `
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
