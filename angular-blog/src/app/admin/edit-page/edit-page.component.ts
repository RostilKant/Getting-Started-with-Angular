import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
    form: FormGroup
    post: Post
    submitted = false
    
    uSub: Subscription
    
    constructor(
        private postsService: PostsService,
        private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params) => {
                return this.postsService.getById(params.id)
        })).subscribe((post: Post) => {
            this.post = post
            this.form = new FormGroup({
                title: new FormControl(post.title, Validators.required),
                content: new FormControl(post.content, Validators.required)
            })
        })
    }
    
    submit() {
        if(this.form.invalid) {
            return
        }
        
        this.submitted = true
        
        this.uSub = this.postsService.update({
            ...this.post,
            content: this.form.value.content,
            title: this.form.value.title
        }).subscribe(() => {
            this.submitted = false
        })
    }
    
    ngOnDestroy(): void {
        if(this.uSub){
            this.uSub.unsubscribe()
        }
    }
}
