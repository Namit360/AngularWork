import { Component } from '@angular/core';
import { Recepie } from '../recepies.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent {
recipes: Recepie[] = [
  new Recepie('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recepie('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];

}
