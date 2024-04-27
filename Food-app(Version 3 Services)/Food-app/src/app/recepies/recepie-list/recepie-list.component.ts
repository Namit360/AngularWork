import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit {

//@Output() recipieWasSelected = new EventEmitter<Recepie>();

recipes: Recepie[];

constructor(private recipeService : RecipeService){}

ngOnInit() {
  this.recipes = this.recipeService.getRecipe();
}

// onRecepieSelected(recipe: Recepie){
//   this.recipieWasSelected.emit(recipe);
// }

}
