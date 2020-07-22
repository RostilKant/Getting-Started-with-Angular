import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'violet';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};

  @HostBinding('style.color') elColor = null;
  @HostBinding('style.border') elBorder = null;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void{
    console.log(event);
  }

  @HostListener('mouseenter') OnEnter(): void{
    this.elColor = this.color;
    this.elBorder = this.dStyles.border;
    // this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.element.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.renderer.setStyle(this.element.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.element.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') OnLeave(): void{
    this.elColor = null;
    this.elBorder = null;
    // this.renderer.setStyle(this.element.nativeElement, 'color', null);
    // this.renderer.setStyle(this.element.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.element.nativeElement, 'border', null);
    // this.renderer.setStyle(this.element.nativeElement, 'borderRadius', null);
  }
}
