import { Component, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepies.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent {

@Output() recipieWasSelected = new EventEmitter<Recepie>();

recipes: Recepie[] = [
  new Recepie('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recepie('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];
onRecepieSelected(recipe: Recepie){
  this.recipieWasSelected.emit(recipe);
}

}
