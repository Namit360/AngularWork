import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') opened = false;

  //open when clicked to dropdown and closed clicking same 
  // @HostListener('click') toggleListener(){
  //   this.opened= !this.opened;
  // }

  @HostListener('document:click', ['$event']) toggleListener(event: Event) 
  {
    this.opened = this.elRef.nativeElement.contains(event.target) ? !this.opened : false;
  }

  constructor(private elRef: ElementRef) { }
}
