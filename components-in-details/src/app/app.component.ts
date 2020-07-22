import { Component, OnInit } from '@angular/core'

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title: 'I want to be full-stack', text: 'I should learn Angular', id: 1},
    {title: 'It\'s time to work', text: 'No days without commits!', id: 2}
    ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0].title = 'Changed'
    }, 5000)
  }
}
