import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit, OnDestroy {

//@Output() recipieWasSelected = new EventEmitter<Recepie>();

recipes: Recepie[];
subscription: Subscription;

constructor(private recipeService : RecipeService, private router: Router, private route: ActivatedRoute){}

ngOnInit() {
  this.subscription = this.recipeService.recipeChanged.subscribe(
    (recipes : Recepie[])=>{
      this.recipes = recipes;
    }
  );
  this.recipes = this.recipeService.getRecipe();
}

ngOnDestroy()
{
  this.subscription.unsubscribe();
}

// onRecepieSelected(recipe: Recepie){
//   this.recipieWasSelected.emit(recipe);
// }

onNewRecipe()
{
    this.router.navigate(['new'], {relativeTo: this.route});
}

}
