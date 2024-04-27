import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrl: './recepie-detail.component.css'
})
export class RecepieDetailComponent implements OnInit {
  recipe: Recepie;
  id:number;

  constructor(private recipeService : RecipeService, private route: ActivatedRoute, private router : Router){}

  ngOnInit() 
  {
    this.route.params.subscribe(
      (params : Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeByID(this.id);
      }
    );
  }

  onAddToShoppingList()
  {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe()
  {
      this.router.navigate(['edit'], {relativeTo: this.route});
      //this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
  }
}
