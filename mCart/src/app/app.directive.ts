import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class AppDirective {

  @Input() loginTitle ='';

  constructor(private el:ElementRef, private renderer: Renderer2) { }



}
