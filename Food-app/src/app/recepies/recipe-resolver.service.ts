import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recepie } from "./recepies.model";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recepie[]>
{

    constructor(private dataStorageService : DataStorageService, private recipeService :RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        const recipes = this.recipeService.getRecipe();

        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes();
        }else{
            return recipes;
        }        
    }
}