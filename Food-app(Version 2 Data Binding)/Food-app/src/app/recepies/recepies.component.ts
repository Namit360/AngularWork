import { Component } from '@angular/core';
import { Recepie } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent {
  selectedRecipe: Recepie;
}
