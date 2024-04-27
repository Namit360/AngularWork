import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recepies/recipe.service";
import { Recepie } from "../recepies/recepies.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn:'root'})
export class DataStorageService
{
    constructor(private http : HttpClient, private rService : RecipeService, private authService: AuthService){}

    storeRecipes()
    {
        const recipes = this.rService.getRecipe();
        this.http.put('https://food-app-4b657-default-rtdb.firebaseio.com/recipe.json', recipes).subscribe(
            response =>{
                console.log(response);
            }
        );
    }

    fetchRecipes()
    {
        return this.http.get<Recepie[]>('https://food-app-4b657-default-rtdb.firebaseio.com/recipe.json')
            .pipe(map(recipes =>{
                return recipes.map(recipe =>{
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                });
            }),
            tap(recipes =>{
                    this.rService.setRecipes(recipes);
                }
            ));
    }
}