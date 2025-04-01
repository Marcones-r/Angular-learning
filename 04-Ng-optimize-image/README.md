# 📦 Projet : 04-Ng-optimize-image

## 🎯 Objectif
Apprendre à utiliser `NgOptimizedImage` dans Angular 19 pour optimiser le chargement d’images (lazy loading, responsive, performance) et comprendre la gestion des ressources statiques dans les versions récentes d'Angular.

---

## 🧪 Journal de solutions de bugs et indications des erreurs

### 🗓️ 01/04/2025 — Image non affichée avec NgOptimizedImage

#### 🔹 Le code :
```html
<img ngSrc="assets/img/Angular.webp" width="300" height="300" alt="Angular icon" />
```

#### 🔴 Le bug :
L’image ne s’affichait pas dans le navigateur malgré un chemin apparemment correct et l’utilisation de `NgOptimizedImage`.  
L’attribut `ngSrc="assets/img/Angular.webp"` ne chargeait rien.

#### 🎯 L’origine :
Dans les versions récentes d’Angular (17+), la gestion des images statiques a changé.  
Le dossier `src/assets` ne fonctionne pas toujours comme attendu pour les images chargées directement via `src` ou `ngSrc`.  
Angular privilégie désormais le dossier `public/` pour les fichiers statiques accessibles sans traitement Angular.  
De plus, le test d'image a été fait dans `index.html`, qui ne prend pas en charge Angular (`ngSrc`).

#### ✅ La solution :
Déplacer l’image dans le dossier `public/assets`, puis utiliser un chemin absolu classique avec `src` :
```html
<img src="/assets/Angular.webp" width="300" height="300" alt="Logo Angular" />
```
Cela a permis d'afficher correctement l’image, sans besoin d'importer ou d’utiliser `NgOptimizedImage` dans ce cas.

#### 💡 Philosophie du bug :
> **Les outils évoluent, les conventions changent : il faut toujours remettre en question ce qu'on pense "acquis" et vérifier la documentation officielle.**  
> Se former, c’est aussi apprendre à détecter que ce qui ne marche pas aujourd’hui n’était peut-être pas un bug… hier.

---

🎯 À chaque bug résolu, je construis ma boîte à outils de développeur.
