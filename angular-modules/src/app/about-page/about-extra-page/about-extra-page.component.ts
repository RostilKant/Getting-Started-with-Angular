import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-extra-page',
  template: `
    <div class="card">
      <h2>About extra</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Cupiditate doloribus inventore, iure nam nihil possimus repellendus totam ut velit vitae!</p>
    </div>
  `
})
export class AboutExtraPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
