import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGreeting]'
})
export class GreetingDirective implements OnInit{
  @Input() role: string = "";
  constructor(private elementRef: ElementRef, private render: Renderer2) { }
   ngOnInit() {
    this.render.setStyle(this.elementRef.nativeElement, 'display', 'flex');
    this.render.setStyle(this.elementRef.nativeElement, 'justify-content', 'center');
     this.render.setProperty(this.elementRef.nativeElement, 'innerHTML', `Вітаю, ${this.role.toString()}!`);
   }
}
