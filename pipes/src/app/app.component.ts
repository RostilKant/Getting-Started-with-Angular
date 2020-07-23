import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  /*e = Math.E;
  str = 'Hello Angular'
  date = new Date()
  float = 0.42*/
  search = ''
  searchField = 'title'
  posts: Post[] = [
    {title: 'Beer', text:'Hoegaarden'},
    {title: 'Beer', text: 'Hike'},
    {title: 'Blanch', text: 'Kronenburg Blank'}
  ];

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 5000)
  })

  addPost() {
    this.posts.unshift(
      {title: 'Angular 9', text: 'Course'}
    )
  }
}
