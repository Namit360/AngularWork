import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepie } from '../../recepies.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css'
})
export class RecepieItemComponent 
{
  @Input()recipe: Recepie;
  @Input()index : number;

  //@Output() recepieSelected = new EventEmitter<void>();

  //constructor(private recipeService : RecipeService){}
  
  // onSelect()
  // {
  //   //this.recepieSelected.emit();

  //   this.recipeService.recepieSelected.emit(this.recipe);

  // }

}