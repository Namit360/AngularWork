import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepie } from '../../recepies.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css'
})
export class RecepieItemComponent {
  @Input()recipe: Recepie;

  @Output() recepieSelected = new EventEmitter<void>();
  
  onSelect(){
 this.recepieSelected.emit();
  }

}