import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Nécessaire pour pouvoir utiliser les directives comme *ngFor
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  template: `
    <div>
      <h1>How I feel about Angular</h1>

      <article>
        <!-- 
          *ngFor : directive structurelle Angular utilisée pour répéter un élément HTML
          let i of fillerParagraphs : itère sur le tableau fillerParagraphs
          {{ i + 1 }} : affiche le numéro de paragraphe (commence à 1, pas à 0)
          Cette section sert juste à "pousser" le contenu plus bas (création de scroll)
        -->
        <p *ngFor="let i of fillerParagraphs">
          Paragraph {{ i + 1 }} – Just filler to push down content.
        </p>
      </article>

      <section style="margin-top: 200px; border-top: 2px dashed #ccc; padding-top: 20px;">
        <!-- 
          @defer : directive Angular qui permet de retarder le rendu d’un bloc HTML
          (on timer(2s)) : déclenche le rendu différé après 2 secondes
        -->
        @defer (on timer(2s)) {
          <comments /> <!-- Composant différé qui sera affiché à la fin -->
        } 

        <!-- 
          @placeholder : contenu affiché immédiatement tant que le déclencheur n’est pas encore activé
          Ici, il reste visible pendant les 2 secondes du timer, puis disparaît
        -->
        @placeholder {
          <p style="color: gray">⏳ future commentaire visible dans 4s...</p>
        } 

        <!-- 
          @loading : contenu affiché pendant le "chargement différé" (après le déclenchement)
          (minimum 2s) : reste affiché au moins 2 secondes, même si le composant se charge plus vite
        -->
        @loading (minimum 2s) {
          <p style="color: orange">⏬ Loading comments ...</p>
        }
      </section>
    </div>
  `,
})
export class AppComponent {
  title = 'defer';

  // 
  // fillerParagraphs : tableau de 50 éléments (valeurs de 0 à 49)
  // Sert à générer des paragraphes fictifs pour allonger la page
  // Utile pour tester le comportement de défilement (scroll) ou de vues différées
  //
  fillerParagraphs = Array.from({ length: 50 }, (_, i) => i);
}

/*
----------------------------------------------
🧠 Angular - @defer (résumé personnel)
----------------------------------------------

👉 `@defer` permet de différer le rendu d’un composant ou d’une vue jusqu’à ce qu’une condition soit remplie.

🛠️ Syntaxe :
@defer (on déclencheur) {
  <!-- contenu différé -->
} @placeholder {
  <!-- affiché immédiatement, avant le déclenchement -->
} @loading (minimum x) {
  <!-- affiché pendant le chargement -->
}

📌 Déclencheurs disponibles :
- on idle           → lorsque le navigateur est inactif
- on timer(2s)      → après un délai spécifique
- on viewport       → quand l’élément entre dans la zone visible
- on interaction    → après une action de l'utilisateur

🎯 Utilisation typique :
- Améliorer les performances (évite le chargement immédiat de tout)
- Meilleure UX : placeholder → loading → contenu

⚠️ À noter :
- `@placeholder` disparaît **dès que le déclencheur est activé**
- `@loading` s'affiche pendant le chargement, et peut être forcé avec `(minimum 2s)`

#############################################################################################

*/

/*
----------------------------------------------------------
🪲 Le bug :
----------------------------------------------------------
Lors de l'utilisation de la directive *ngFor dans ce composant :

<p *ngFor="let i of fillerParagraphs">
  Paragraph {{ i + 1 }}
</p>

➡️ Angular renvoyait une erreur :
"Can't bind to 'ngForOf' since it isn't a known property of 'p'"

Ce qui signifie que Angular ne reconnaît pas *ngFor comme une directive valide.

----------------------------------------------------------
🎯 L’origine :
----------------------------------------------------------
Ce composant est défini comme **standalone** :

@Component({
  standalone: true,
  ...
})

➡️ Dans les composants standalone, Angular **n’inclut pas automatiquement les modules communs**, comme le `CommonModule` (qui contient *ngIf, *ngFor, etc.)

Par conséquent, Angular ne reconnaît pas *ngFor sauf si on l’importe **manuellement**.

----------------------------------------------------------
✅ La solution :
----------------------------------------------------------
Il faut importer manuellement `CommonModule` dans le tableau `imports` du composant standalone :

import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule, // ✅ nécessaire pour que *ngFor fonctionne
    CommentsComponent
  ],
  ...
})

➡️ Une fois `CommonModule` ajouté, *ngFor est reconnu et fonctionne parfaitement.
*/

