const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models");
const Op = db.Sequelize.Op;
const Utilisateur = db.utilisateurs;




// Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base de données
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const data = {
            email: req.body.email,
            name: req.body.name,
            password: hash
          };
        const user = Utilisateur.create(data)
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => {
          console.log(error);
          return res.status(400).json({ error });
        }
        );
    })
    .catch(error => {
        console.log(error);
        return res.status(500).json({ error });
    }
    )
};

// Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant userID 
// depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID)
exports.login = (req, res, next) => {
  Utilisateur.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Afficher tous les postes
exports.getAll = (req, res) => {
  Utilisateur.findAll({
    attributes: ['email', 'name']
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Une erreur est apparue pendant l'affichage des utilisateurs."
    });
  });
}

// L'utilisateur peut supprimer son profil
exports.delete = (req, res) => {
  try {
    const user = Utilisateur(req.params.id);
    if (user.id === req.body.id) {
      user.delete({$set:req.body});
      res.status(200).json("Le compte a été supprimé.")
    } else {
      res.status(403).json("Ce compte n'a pas pu être supprimé");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
