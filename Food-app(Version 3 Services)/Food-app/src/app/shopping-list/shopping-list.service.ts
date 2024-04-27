import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Patatoes', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Raddish', 5),
        new Ingredient('Apple', 10),
      ];
    
      getIngredients()
      {
          return this.ingredients.slice();
      }

      addIngredients( ing : Ingredient)
      {
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      
      addIngredient( ingredients : Ingredient[])
        {
            // for (let ingredient of ingredients)
            //     {
            //         this.addIngredients(ingredient);
            //     }
            this.ingredients.push(...ingredients); // convert ingredient array into list and push all values at once
            this.ingredientsChanged.emit(this.ingredients.slice());
        }
}