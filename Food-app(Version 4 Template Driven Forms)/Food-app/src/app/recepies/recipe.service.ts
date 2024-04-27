import { EventEmitter, Injectable } from "@angular/core";
import { Recepie } from "./recepies.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService
{
    private recipes: Recepie[] = [
        new Recepie(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
            ]),
        new Recepie(
            'Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
            ])
      ];

      recepieSelected = new EventEmitter<Recepie>();

      constructor(private slService : ShoppingListService)
      {}

    getRecipe()
    {
        return this.recipes.slice();
    }

    getRecipeByID(index: number)
    {
        return this.recipes[index];
    }

    addToShoppingList(ingredients : Ingredient[])
    {
        this.slService.addIngredient(ingredients);
    }
}