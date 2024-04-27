import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  @ViewChild('f') slForm: NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem :Ingredient;
  
  constructor(private sLService : ShoppingListService){}

  ngOnInit() 
  {
    this.subscription = this.sLService.startedEditing.subscribe(
      (index: number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.sLService.getIngredient(index);
        this.slForm.setValue(
          {
            name:this.editedItem.name,
            amount:this.editedItem.amount
          }
        ); 
      }
    );
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();  
  }

  onSubmitItem(form : NgForm) 
  {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
      {
        this.sLService.updateIngredients(this.editedItemIndex, newIngredient);
      }else{
        //this.ingredientAdded.emit(newIngredient);
        this.sLService.addIngredients(newIngredient);
      }
    this.editMode=false;
    form.reset();    
  }

  onDelete()
  {
    this.sLService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }

}
