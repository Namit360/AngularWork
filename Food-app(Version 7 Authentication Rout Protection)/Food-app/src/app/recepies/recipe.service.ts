import { EventEmitter, Injectable } from "@angular/core";
import { Recepie } from "./recepies.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService
{

    recipeChanged = new Subject<Recepie[]>();
    
    // private recipes: Recepie[] = [
    //     new Recepie(
    //         'Tasty Schnitzel',
    //         'A super-tasty Schnitzel - just awesome!',
    //         'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //         [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('French Fries', 20)
    //         ]),
    //     new Recepie(
    //         'Big Fat Burger',
    //         'What else you need to say?',
    //         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //         [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat', 1)
    //         ])
    //   ];

    private recipes: Recepie[] =[]

    recepieSelected = new EventEmitter<Recepie>();

    constructor(private slService : ShoppingListService){}

    setRecipes(recipe : Recepie[])
    {
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice())
    }

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

    addRecipe(recipe : Recepie)
    {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recepie)
    {
        this.recipes[index]= newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number)
    {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}