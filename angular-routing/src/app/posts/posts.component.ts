import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds = false;

  posts: Post[];
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.posts = this.postsService.posts;
    this.route.queryParams.subscribe(params => {
       this.showIds = !!params.showIds;
    });
  }

  showIdsProgram(): void {
    this.router.navigate(['/posts'], {
      queryParams: {showIds: true}
    });
  }
}
