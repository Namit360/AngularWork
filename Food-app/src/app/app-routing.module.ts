import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";



const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch:'full'},
    { 
      path: 'recipes', 
      loadChildren: ()=>import('./recepies/recepies.module').then(m => m.RecepiesModule) 
    },
    { 
      path: 'shopping-list', 
      loadChildren: ()=>import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) 
    },
    { 
      path: 'auth', 
      loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule) 
    }
    
  ];

@NgModule({
    //adding preload to modules using preloadingStrategy
    imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule
{

}