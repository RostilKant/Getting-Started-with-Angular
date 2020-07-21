import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
  <div class="post3">
    <h2>It's Post3Component</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sint vitae voluptatum.</p>
  </div>
  `,
  styles: [`
    .post3{
      padding: 2rem;
      border: dashed #ff5c45 1px;
      margin-top: 5rem;
    }
  `]
})

export class Post3Component { }
