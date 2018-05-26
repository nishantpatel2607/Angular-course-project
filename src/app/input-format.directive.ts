import { Directive, HostListener, ElementRef, Input } from '@angular/core';
// Hostlistner allows us to subscribe to the events raised from DOM elements using our directive
@Directive({ 
  selector: '[appInputFormat]'      
})
export class InputFormatDirective {

  @Input('Format') format; 
  
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
