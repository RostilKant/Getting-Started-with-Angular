import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(condition: boolean){
    if (!condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }
  constructor(private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
