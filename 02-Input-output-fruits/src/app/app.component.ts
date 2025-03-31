
// ===============================
// app.component.ts (composant parent)
// ===============================

// Import de Component pour déclarer un composant, de CommonModule pour utiliser les directives Angular de base
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitSelectorComponent } from './fruit-selector/fruit-selector.component'; // Importation du composant enfant

// Déclaration du composant parent autonome (standalone)
@Component({
  selector: 'app-root',           // Balise utilisée dans index.html
  standalone: true,              // Utilisation sans module
  imports: [CommonModule, FruitSelectorComponent], // Modules utilisés dans ce composant
  template: `
    <h2>Exemple avec &#64;Input et &#64;Output</h2>

    <!-- Composant enfant avec liaison de propriété (Input) et écoute d’événement (Output) -->
    <app-fruit-selector 
    
      [fruit]="fruitDuParent"               
      (fruitAdded)="ajouterAuPanier($event)"><!-- ([fruit]="fruitDuParent" ) Envoie la variable fruitDuParent au composant enfant --> <!-- ((fruitAdded)="ajouterAuPanier($event)) Récupère l’événement personnalisé fruitAdded -->
    </app-fruit-selector>

    <h3>Fruits dans le panier :</h3>
    <ul>
      <!-- *ngFor : directive Angular pour répéter un élément pour chaque fruit dans le tableau -->
      <li *ngFor="let fruit of panier">{{ fruit }}</li>
    </ul>
  `
})
export class AppComponent {
  // ------------------
  // PROPRIÉTÉ fruitDuParent
  // ------------------
  // Cette propriété est envoyée au composant enfant via [fruit]
  fruitDuParent: string = '🍌 Banane';

  // ------------------
  // PROPRIÉTÉ panier
  // ------------------
  // Tableau qui contient les fruits ajoutés par l'enfant
  panier: string[] = [];

  // ------------------
  // MÉTHODE ajouterAuPanier(fruit)
  // ------------------
  // Reçoit un fruit depuis l’événement émis par l’enfant et l’ajoute dans le tableau panier
  ajouterAuPanier(fruit: string) {
    this.panier.push(fruit); // Ajout du fruit dans le tableau
  }
}
