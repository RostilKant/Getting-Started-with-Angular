import {CounterComponent} from './counter.component'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {By} from '@angular/platform-browser'

xdescribe('CounterComponent', () => {
    let fixture: ComponentFixture<CounterComponent>
    let component: CounterComponent
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CounterComponent]
        })
        fixture = TestBed.createComponent(CounterComponent)
        component = fixture.componentInstance
    })
    
    xit('should be created', () => {
        expect(component).toBeDefined()
    })
    
    xit('should render counter prop', () => {
        const num = 42
        component.counter = num
        
        fixture.detectChanges()
        
        const de = fixture.debugElement.query(By.css('.counter'))
        const el: HTMLElement = de.nativeElement
        
        expect(el.textContent).toContain(num.toString())
    })
    
    xit('should add green class of counter is even', () => {
        component.counter = 6
        
        fixture.detectChanges()
    
        const de = fixture.debugElement.query(By.css('.counter'))
        const el: HTMLElement = de.nativeElement
        
        expect(el.classList.contains('green')).toBeTruthy()
    })
    
    xit('should increment counter if button "Increment" is clicked', () => {
        const btn  = fixture.debugElement.query(By.css('#increment'))
        btn.triggerEventHandler('click', null)
        
        expect(component.counter).toBe(1)
    })
    
    xit('should decrement counter if button "Decrement" is clicked', () => {
        const btn  = fixture.debugElement.query(By.css('#decrement'))
        btn.triggerEventHandler('click', null)
        
        expect(component.counter).toBe(-1)
    })
    
})
