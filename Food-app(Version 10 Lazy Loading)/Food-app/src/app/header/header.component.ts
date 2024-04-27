import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component(
    {
        selector:'app-header',
        templateUrl:'\header.component.html'
    }
)
export class HeaderComponent implements OnInit,OnDestroy
{
    authenticated = false;
    private userSub : Subscription;
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string)
    // {
    //     this.featureSelected.emit(feature);
    // }
    constructor(private dsService : DataStorageService, private authService: AuthService){}

    ngOnInit()
    {
       this.userSub = this.authService.user.subscribe(user =>{
        //this.authenticated = !user? false  : true;
        this.authenticated = !!user;
        console.log(!user);
        console.log(!!user);
       });
    }

    ngOnDestroy()
    {
        this.userSub.unsubscribe();
    }

    onSaveData()
    {
        this.dsService.storeRecipes();
    }

    onFetchData()
    {
        this.dsService.fetchRecipes().subscribe();
    }

    onLogOut()
    {
        this.authService.logout();
    }
}