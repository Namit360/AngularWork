import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecepiesComponent } from "./recepies/recepies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recepies/recipe-start/recipe-start.component";
import { RecepieDetailComponent } from "./recepies/recepie-detail/recepie-detail.component";
import { RecipeEditComponent } from "./recepies/recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recepies/recipe-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch:'full'},
    { path: 'recipes', component: RecepiesComponent, 
    canActivate: [AuthGuard],
    children: [
        {path:'', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecepieDetailComponent,resolve: [RecipeResolverService]},    
        {path:':id/edit', component: RecipeEditComponent,resolve: [RecipeResolverService]}, 
    ] },
    { path: 'shopping-list', component: ShoppingListComponent, children: [] },   
    { path: 'auth', component: AuthComponent },    
  ];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule
{

}