import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService
{

    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

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

      getIngredient(index : number)
      {
        return this.ingredients[index];
      }

      addIngredients( ing : Ingredient)
      {
        this.ingredients.push(ing);
        //this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      
      addIngredient( ingredients : Ingredient[])
        {
            // for (let ingredient of ingredients)
            //     {
            //         this.addIngredients(ingredient);
            //     }
            this.ingredients.push(...ingredients); // convert ingredient array into list and push all values at once
            //this.ingredientsChanged.emit(this.ingredients.slice());
            this.ingredientsChanged.next(this.ingredients.slice());
        }
      updateIngredients(index :number, newIngredient: Ingredient)
      {
          this.ingredients[index]=newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredients(index : number)
      {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}