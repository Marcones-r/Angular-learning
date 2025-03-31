import { Component } from "@angular/core";
import { FruitSelectorComponent } from "./fruit-selector/fruit-selector.component";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FruitSelectorComponent, CommonModule],
  template: `
    <h2>Choisis un fruit :</h2>
    <app-fruit-selector (fruitChosen)="ajouterFruit($event)"></app-fruit-selector>

    <h3>Fruits sélectionnés :</h3>
    <ul>
      <li *ngFor="let fruit of panier">{{ fruit }}</li>
    </ul>
  `,
})
export class AppComponent {
  panier: string[] = [];

  ajouterFruit(fruit: string) {
    this.panier.push(fruit);
  }

}