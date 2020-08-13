import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor(
      postsService: PostsService,
      route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
