import { NgModule } from "@angular/core";
import { RecepiesComponent } from "./recepies.component";
import { RecepieListComponent } from "./recepie-list/recepie-list.component";
import { RecepieDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecepieItemComponent } from "./recepie-list/recepie-item/recepie-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecepiesRoutingModule } from "./recepies-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecepiesComponent,
        RecepieListComponent,
        RecepieDetailComponent,
        RecepieItemComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports:[RouterModule, ReactiveFormsModule, RecepiesRoutingModule, SharedModule],
    // exports: [
    //     RecepiesComponent,
    //     RecepieListComponent,
    //     RecepieDetailComponent,
    //     RecepieItemComponent,
    //     RecipeStartComponent,
    //     RecipeEditComponent
    // ]  --> not needed as theses  components are not used outside
})
export class RecepiesModule
{

}