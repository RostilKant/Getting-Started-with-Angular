import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';

  Toggle = false;

  arr = [1, 1, 2, 3, 5, 8, 13];

  img = 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png';

  objs = [
    {title: 'Post 1', author: 'Rostil', comments: [
        {name: 'Rost', text: 'Lorem 1'},
        {name: 'Rost', text: 'Lorem 2'},
        {name: 'Rost', text: 'Lorem 3'}
      ]},
    {title: 'Post 1', author: 'Rostil', comments: [
        {name: 'Rost', text: 'Lorem 1'},
        {name: 'Rost', text: 'Lorem 2'},
        {name: 'Rost', text: 'Lorem 3'}
      ]}
  ];
  now: Date = new Date();

  constructor() {
    setTimeout(() =>
    {this.img = 'https://cdn.dribbble.com/users/' +
      '3800004/screenshots/7117214/media/f7033a9a747f2fec2d04f84b774d9827.jpg'; }, 2000);
  }

  inputValue = '';

  onInput(event: KeyboardEvent): void{
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onClick(): void{
    console.log('Click-click');
  }
}
