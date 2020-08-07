import {RoutingComponent} from './routing.component'
import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing'
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router'
import {BehaviorSubject} from 'rxjs'
import {By} from '@angular/platform-browser'
import {RouterTestingModule} from '@angular/router/testing'
import {NO_ERRORS_SCHEMA} from '@angular/core'


export class ActivatedRouteStub {
     params = new BehaviorSubject<Params>({id: ''})
}

describe('RoutingComponent', () => {
    let component: RoutingComponent
    let fixture: ComponentFixture<RoutingComponent>
    // let activatedRouteSpy: any
    
    beforeEach(async (() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate'])
        // const routeSpy = jasmine.createSpyObj('Route', ['params'])
        // activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['params'])
        
    
        TestBed.configureTestingModule({
            declarations: [RoutingComponent],
            imports: [RouterTestingModule],
            providers: [
                {provide: Router, useValue: routerSpy},
                {provide: ActivatedRoute, useClass: ActivatedRouteStub},
                {provide: ComponentFixtureAutoDetect, useValue: true}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents()
    }))
    
    beforeEach(async(() => {
        fixture = TestBed.createComponent(RoutingComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))
    
    
    it('should be defined', () => {
        expect(component).toBeDefined()
    })
    
    it('should navigate to posts if go back', () => {
        const routerSpy = TestBed.inject(Router)
        component.goBack()
        const arg = (routerSpy.navigate as jasmine.Spy).calls.first().args[0]
        expect(arg).toEqual(['/posts'])
    })

    it('should navigate to 404 page if id = 0',  () => {
        const routerSpy = TestBed.inject(Router)
        // const routeSpy: any = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>
        const route: ActivatedRouteStub = TestBed.inject(ActivatedRoute) as any
        route.params.next({id: '0'})
        
        const arg = (routerSpy.navigate as jasmine.Spy).calls.first().args[0]
        expect(arg).toEqual(['/404'])
    })
    
    it('should have router-outlet directive', () => {
        const de = fixture.debugElement.query(By.directive(RouterOutlet))

        expect(de).not.toBeNull()
    })
})
