// ===============================
// fruit-selector.component.ts
// ===============================

// Importation des éléments essentiels d'Angular pour créer un composant et gérer les entrées/sorties
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Déclaration du composant Angular autonome (standalone)
@Component({
  selector: 'app-fruit-selector', // Nom de la balise utilisée dans le parent
  standalone: true,               // Indique que ce composant n'a pas besoin de NgModule
  // Template inline avec du HTML directement dans le code TS
  template: `                     
    <p>Fruit proposé par le parent : <strong>{{ fruit }}</strong></p> <!-- Affiche le fruit reçu -->
    <button (click)="ajouterAuPanier()">Ajouter au panier</button>     <!-- Bouton avec écouteur d'événement click -->
  `
})
export class FruitSelectorComponent {
  // ------------------
  // PROPRIÉTÉ @Input
  // ------------------
  // @Input() : décorateur Angular qui permet de recevoir une valeur depuis le composant parent
  // fruit : nom de la propriété locale
  // string : typage TypeScript → cette propriété attend une chaîne de caractères
  // = '🍎 Pomme' : valeur par défaut si le parent n'envoie rien
  @Input() fruit: string = '🍎 Pomme';

  // ------------------
  // PROPRIÉTÉ @Output
  // ------------------
  // @Output() : décorateur Angular qui rend la propriété écoutable par le parent
  // fruitAdded : nom de l'événement personnalisé
  // new EventEmitter<string>() : création d'un émetteur d'événement qui envoie une chaîne de caractères
  @Output() fruitAdded = new EventEmitter<string>();

  // ------------------
  // MÉTHODE ajouterAuPanier()
  // ------------------
  // Fonction appelée lors du clic sur le bouton
  // Elle émet la valeur du fruit courant au parent en utilisant fruitAdded.emit()
  ajouterAuPanier() {
    this.fruitAdded.emit(this.fruit); // Envoie l'information vers le parent
  }
}
