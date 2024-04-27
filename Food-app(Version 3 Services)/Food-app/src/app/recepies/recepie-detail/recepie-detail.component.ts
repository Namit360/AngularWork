import { Component, Input } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrl: './recepie-detail.component.css'
})
export class RecepieDetailComponent {
  @Input() recipe: Recepie;

  constructor(private recipeService : RecipeService){}

  onAddToShoppingList()
  {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
