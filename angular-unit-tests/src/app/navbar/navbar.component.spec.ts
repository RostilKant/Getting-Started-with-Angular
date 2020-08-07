import {NavbarComponent} from './navbar.component'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'
import {By} from '@angular/platform-browser'
import {RouterLinkWithHref} from '@angular/router'
import {RouterTestingModule} from '@angular/router/testing'

describe('NavbarComponent', () => {
    let fixture: ComponentFixture<NavbarComponent>
    let component: NavbarComponent
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [RouterTestingModule],
        }).compileComponents()
    }))
    
    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    it('should be defined', () => {
        expect(component).toBeDefined()
    })
    
    it('should have link to posts page', () => {
        const debugElement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
        const index = debugElement.findIndex(e => e.properties.href === '/posts')
        
        expect(index).toBeGreaterThan(-1)
    })
})
