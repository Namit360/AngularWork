import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecepiesComponent } from "./recepies.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recipe-resolver.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";

const routes: Routes = [
{ path: 'recipes', component: RecepiesComponent, //recipes path name removed for lazy loading added in app-routing module
    canActivate: [AuthGuard],
    children: [
        {path:'', component: RecipeStartComponent},
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecepieDetailComponent,resolve: [RecipeResolverService]},    
        {path:':id/edit', component: RecipeEditComponent,resolve: [RecipeResolverService]}, 
    ] 
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecepiesRoutingModule
{

}