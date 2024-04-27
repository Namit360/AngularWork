import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepie } from '../../recepies.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css'
})
export class RecepieItemComponent 
{
  @Input()recipe: Recepie;

  //@Output() recepieSelected = new EventEmitter<void>();

  constructor(private recipeService : RecipeService){}
  
  onSelect()
  {
    //this.recepieSelected.emit();

    this.recipeService.recepieSelected.emit(this.recipe);

  }

}