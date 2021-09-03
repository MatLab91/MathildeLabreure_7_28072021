# OpenClassrooms P7 - Réseau social d'entreprise
7ème projet de la formation de [développeur web de OpenClassrooms]

## Scénario
Développement (Frontend et Backend) d'un réseau social d'entreprise pour une société fictive Groupomania.  
Les contraintes pour ce projet sont le respect de la charte graphique et l'utilisation d'un framework frontend et d'une base de données SQL. 

## Fonctionnalités implémentées
- Création d'utilisateurs (CRUD)
- Les utilisateurs pourront
  - Voir les derniers posts de tous les utilisateurs
  - Publier des images avec du texte
  - Publier du texte
  - Modifier leur profil
- Sur chaque posts, les utilisateurs pourront
  - Commenter
  - Supprimer leur propre post/comment
- Modération par des administrateurs qui peuvent
  - Supprimer les posts/commentaires qu'ils jugent inappropriés.
- Autres
  - Session persistante au rechargement de la page
  - possibilité de se déconnecter


## Technologies utilisées
- Backend
  - Serveur **Node.js** avec Framework **Express**
  - Base de Données **MySQL** 
  - **API REST**
- Frontend
  - Framework **Vue**
  - **SCSS** (sans framework css)
