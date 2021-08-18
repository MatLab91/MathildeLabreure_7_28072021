# OpenClassrooms P7 - Réseau social d'entreprise
7ème projet de la formation de [développeur web de OpenClassrooms](https://openclassrooms.com/fr/paths/185-developpeur-web)

## Scénario
Développement (Frontend et Backend) d'un réseau social d'entreprise pour une société fictive Groupomania.  
Une grande liberté est donnée pour développer ce projet: il faut simplement respecter la charte graphique fournie.

## Fonctionnalités implémentées
- Création d'utilisateurs (CRUD)
- Les utilisateurs pourront
  - Voir les derniers posts de tous les utilisateurs
  - Publier des images
  - Publier du texte
  - Modifier leur profil
  - Voir la liste de tous les utilisateurs
  - Rechercher un autre utilisateur dans la liste
  - Accéder au profil public d'un autre utilisateur
  - Voir les derniers posts publiés par cet utilisateur
- Sur chaque posts, les utilisateurs pourront
  - Liker / disliker
  - Commenter
  - Supprimer leur propre post/comment/like
- Modération par des administrateurs qui peuvent
  - Supprimer les posts/commentaires qu'ils jugent inappropriés.
  - Donner/enlever les droits d'admin à un autre utilisateur
- Autres
  - Session persistante au rechargement de la page
  - Chargement des posts au fur et à mesure du scroll (= infinite scroll)

## Apperçu du rendu
Voilà [une vidéo qui décrit rapidement le différentes fonctionnalités de l'application](https://youtu.be/WLgvV_l-GcI)

## Technologies utilisées
- Backend
  - Serveur **Node.js** avec Framework **Express**
  - Base de Données **MySQL** 
  - **API REST**
- Frontend
  - Framework **Vue**
  - **SCSS** (sans framework css)
