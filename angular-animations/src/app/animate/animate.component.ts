import { Component, OnInit } from '@angular/core'
import {boxNgAnimations} from '../app.animations'

@Component({
    selector: 'app-animate',
    template: `
        <button (click)="visible = !visible">Toggle</button>
        <hr>
        <div [@bounce] *ngIf="visible" class="rect">
        </div>
    `,
    styleUrls: ['./animate.component.scss'],
    animations: [
       boxNgAnimations
    ]
})
export class AnimateComponent implements OnInit {
    visible = true
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
