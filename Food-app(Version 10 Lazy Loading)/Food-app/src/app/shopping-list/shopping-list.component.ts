import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients: Ingredient[];
  private changeSub: Subscription

  constructor(private shoppingListService : ShoppingListService, private loggingService: LoggingService){}

  ngOnInit() {
    this.ingredients= this.shoppingListService.getIngredients();
    this.changeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) =>{
        this.ingredients=ingredients;
      }
    );
    this.loggingService.printLog('hello for ngoninit form shopping list component ts file');
  }

  ngOnDestroy()
  {
    this.changeSub.unsubscribe();    
  }

  onEditItem(index: number)
  {
    this.shoppingListService.startedEditing.next(index);
  }

  // onIngredientAdded(ingredient : Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}