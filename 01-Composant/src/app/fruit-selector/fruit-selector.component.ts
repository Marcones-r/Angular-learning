import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fruit-selector',
  imports: [],
  // templateUrl: './fruit-selector.component.html',
  // styleUrl: './fruit-selector.component.css',
  template: `
  <!--    eventt   expression  -->
  <button (click)="selectFruit('Pomme')"> Pomme</button>
  <button (click)="selectFruit('Banane')"> Banane </button>
  <button (click)="selectFruit('Fraise')"> Fraise </button>
  `,
  standalone: true,
})
export class FruitSelectorComponent {
 @Output() fruitChosen = new EventEmitter<string>;

 selectFruit(fruit: string) {
  this.fruitChosen.emit(fruit)
 }
}
