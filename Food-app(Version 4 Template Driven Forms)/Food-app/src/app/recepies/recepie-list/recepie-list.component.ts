import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepies.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit {

//@Output() recipieWasSelected = new EventEmitter<Recepie>();

recipes: Recepie[];

constructor(private recipeService : RecipeService, private router: Router, private route: ActivatedRoute){}

ngOnInit() {
  this.recipes = this.recipeService.getRecipe();
}

// onRecepieSelected(recipe: Recepie){
//   this.recipieWasSelected.emit(recipe);
// }

onNewRecipe()
{
    this.router.navigate(['new'], {relativeTo: this.route});
}

}
