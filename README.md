# Propeace APP

Mini-application Angular pour afficher et manipuler une liste d’annonces immobilières.

---

## Fonctionnalités développées

- Affichage d’une liste d’annonces à partir d’un fichier JSON local (dans `public/assets`).
- Filtres dynamiques sur la ville, prix max, surface min, et date de publication.
- Tri croissant/décroissant par prix et date.
- Vue détail d’une annonce sur une page dédiée via le routing.
- Composant standalone `AnnonceCardComponent` pour chaque annonce.
- Bouton de suppression d’annonce (bonus).
- Composant formulaire pour ajouter une annonce (bonus).
- Responsive design simple.
- Tests unitaires sur plusieurs composants (pas encore totalement stabilisés).

---

## Structure du projet

- `src/app/components/` : composants réutilisables (card, form, list).
- `src/app/annonce-detail/` : composant détail annonce.
- `src/app/pages/home-page/` : page d’accueil listant les annonces.
- `src/app/services/annonce.service.ts` : service pour charger les annonces depuis JSON.
- `public/assets/annonces.json` : fichier JSON des annonces.
- `src/app/app.routes.ts` : configuration du routing.

---

## Installation et lancement

1. Installer les dépendances (si ce n’est pas déjà fait) :

   ```bash
   npm install
---

## Lancer le serveur de développement Angular 

ng serve
 ---

 ## Ouvrir l’application dans un navigateur à l’adresse :

http://localhost:4200/

---

## Pour lancer les tests unitaires avec Karma :

ng test

Note : Certains tests échouent encore à cause de l’injection de dépendances non mockées (notamment HttpClient et ActivatedRoute). Je travaille à améliorer cela.

---


## Difficultés rencontrées

- Configuration des tests unitaires pour les services Angular nécessitant des providers spécifiques (HttpClientTestingModule).

- Gestion du routing dans les tests, particulièrement avec ActivatedRoute.

- Chargement du fichier JSON depuis public/assets au lieu de assets/ car cette dernière méthode ne fonctionnait pas correctement.

---

## Remarques techniques

- Utilisation de composants standalone (Angular 19).

- Injection de services pour récupérer les données.

- Utilisation du binding et des événements pour l’interaction utilisateur.

- Tri et filtres réalisés via des pipes personnalisés ou des méthodes dans les composants.