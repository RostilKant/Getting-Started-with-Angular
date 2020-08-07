import {PostsComponent} from './posts.component'
import {PostsService} from './posts.service'
import {EMPTY, of, throwError} from 'rxjs'
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing'
import {HttpClientModule} from '@angular/common/http'

describe('PostsComponent', () => {
    let component: PostsComponent
    let service: PostsService
    let fixture: ComponentFixture<PostsComponent>
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostsComponent],
            providers: [PostsService],
            imports: [HttpClientModule]
        }).compileComponents()
    }))
    beforeEach(async(() => {
        fixture = TestBed.createComponent(PostsComponent)
        component = fixture.componentInstance
        service = TestBed.inject(PostsService)
    }))
    
    it('should fetch posts on ngOnInit (promise)', fakeAsync(() => {
        const posts = [1, 3, 5]
        spyOn(service, 'fetchPromise').and.returnValue(Promise.resolve(posts))
        
        fixture.detectChanges()
        tick()
        
        expect(component.posts.length).toBe(posts.length)
        // fixture.whenStable().then(() => {
        //     expect(component.posts.length).toBe(posts.length)
        // })
    }))
    
    xit('should fetch posts on ngOnInit', () => {
        const posts = [1, 3, 5]
        spyOn(service, 'fetch').and.returnValue(of(posts))
        
        fixture.detectChanges()
        
        expect(component.posts).toEqual(posts)
    })
    
    xit('should call fetch when ngOnInit', () => {
        const spy = spyOn(service, 'fetch').and.callFake(() => {
            return EMPTY
        })
        
        component.ngOnInit()
        
        expect(spy).toHaveBeenCalled()
    })
    
    xit('should be posts length > 0 after NgOnInit', () => {
        spyOn(service, 'fetch').and.returnValue(of([1, 2, 3]))
        
        component.ngOnInit()
        
        expect(component.posts.length).toBeGreaterThan(0)
    })
    
    xit('should add new post', () => {
        const post = {title: 'New post'}
        const spy = spyOn(service, 'create').and.returnValue(of(post))
        
        component.add(post.title)
        
        expect(spy).toHaveBeenCalled()
        expect(component.posts.includes(post)).toBeTruthy()
    })
    
    xit('should set message to Error', () => {
        const error = 'test error'
        spyOn(service, 'create').and.returnValue(throwError(error))
        
        component.add('Post title')
        
        expect(component.message).toBe(error)
    })
    
    xit('should remove post if user confirms', () => {
        const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
        spyOn(window, 'confirm').and.returnValue(true)
        
        component.delete(10)
        
        expect(spy).toHaveBeenCalledWith(10)
    })
    
    xit('shouldn\'t remove post if user doesn\'t confirm', () => {
        const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
        spyOn(window, 'confirm').and.returnValue(false)
        
        component.delete(10)
        
        expect(spy).not.toHaveBeenCalled()
    })
})
