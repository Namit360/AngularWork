import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepies.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent implements OnInit {
  selectedRecipe: Recepie;

  constructor(private recipeService : RecipeService){}

  ngOnInit(){
    this.recipeService.recepieSelected.subscribe(
      (recipe: Recepie) =>{
        this.selectedRecipe= recipe;
      }
    );
  }
}
