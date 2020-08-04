import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from './modal/modal.component'
import {RefDirective} from './ref.directive'
import {Meta, Title} from '@angular/platform-browser'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    @ViewChild(RefDirective) refDir: RefDirective
    
    constructor(
        private resolver: ComponentFactoryResolver,
        private title: Title,
        private meta: Meta) {
        title.setTitle('angular-dynamic')
        meta.addTags([
            {name: 'keywords', content: 'angular, google'},
            {name: 'description', content: 'this is a description'},
        ])
    }
    
    showModal(): void {
        const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
        this.refDir.containerRef.clear()
        
        const component = this.refDir.containerRef.createComponent(modalFactory)
        component.instance.title = 'Modal Window'
        component.instance.closeModal.subscribe(() => {
            this.refDir.containerRef.clear()
        })
    }

}

