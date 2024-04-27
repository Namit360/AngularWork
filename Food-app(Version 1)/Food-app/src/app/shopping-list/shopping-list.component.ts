import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Patatoes', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Raddish', 5),
    new Ingredient('Apple', 10),
  ];
}