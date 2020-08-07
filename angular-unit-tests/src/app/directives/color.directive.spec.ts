import {ColorDirective} from './color.directive'
import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing'
import {Component} from '@angular/core'
import {By} from '@angular/platform-browser'

@Component({
    template: `
        <p appColor="yellow">First</p>
        <p appColor>First</p>
    `
})
class TestComponent {}

describe('ColorDirective', () => {
    let fixture: ComponentFixture<TestComponent>
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ColorDirective, TestComponent],
            providers: [
                {ComponentFixtureAutoDetect, useValue: true}
            ]
        })
    })
    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent)
        fixture.detectChanges()
    })
    
    it('should create instance of ColorDirective', () => {
        const colorDirective = new ColorDirective(null)
        expect(colorDirective).toBeTruthy()
    })
    
    it('should apply input color', () => {
        const de = fixture.debugElement.queryAll(By.css('p'))[0]
    
        expect(de.nativeElement.style.backgroundColor).toBe('yellow')
    })
    
    it('should apply default color', () => {
        const de = fixture.debugElement.queryAll(By.css('p'))[1]
        const directive = de.injector.get(ColorDirective)
    
        expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor)
    })
    
})
