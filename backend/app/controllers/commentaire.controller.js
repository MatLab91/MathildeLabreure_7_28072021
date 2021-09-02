const db = require("../models");
const Poste = db.postes
const Commentaire = db.commentaires;
const Utilisateur = db.utilisateurs;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const acces = require('../utils/jwt.utils');
const order = acces.decoderToken;
const admin = acces.decoderTokenAdmin;
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;


// Créer et sauvegarder un nouveau commentaire
exports.createCommentaire = (req, res, next) => {
  let token = req.body.token
  const decodedToken = jwt.decode(token, tokenKey);
  const userId = decodedToken.userId;
  let content = req.body.content;
  let id = req.body.posteId;

  Poste.findOne({
    where: { id: id },

  })
    .then((Poste) => {
      Commentaire.create({
        content: content,
        posteId: Poste.id,
        userId: userId
      })
        .then((Commentaire) =>
          res.status(201).json(Commentaire))

        .catch(error => res.status(400).json({ error }))
    })
    .catch(() => {
      res.status(500).json({ 'error': "Le poste n'a pas été trouvé" });
    })
}

// Afficher tous les commentaires sur un poste
exports.getCommentairesByPoste = async (req, res) => {
  let acces = false
  order(req)
  admin(req)
  if (acces = true) {
    await Commentaire.findAll({
      include: [
        {
          model: Utilisateur,
          attributes: ['name'],
          required: false
        }
      ],
      where: { posteId: req.params.id }
    })
      .then((Commentaires) => res.status(200).json(Commentaires))
      .catch(error => res.status(404).json({ error }))
  } else { (console.log('false')), window.location = 'http://localhost:8080/login' }
}

// Afficher tous les commentaires sur un poste
exports.getAllCommentaires = async (req, res) => {
  let acces = false
  order(req)
  admin(req)
  if (acces = true) {
    await Commentaire.findAll({
      include: [
        {
          model: Utilisateur,
          attributes: ['name'],
          required: false
        }
      ]
    })
      .then((Commentaires) => res.status(200).json(Commentaires))
      .catch(error => res.status(404).json({ error }))
  } else { (console.log('false')), window.location = 'http://localhost:8080/login' }
}

//Modifier son propre commentaire
exports.modifyCommentaire = (req, res, next) => {
  let token = req.body.token
  const decodedToken = jwt.decode(token, tokenKey);
  const userId = decodedToken.userId;
  let content = req.body.content;
  let acces = false
  order(req)

  if (Commentaire.userId === userId) {
    Commentaire.findOne({
      attributes: ['id', 'content'],
      where: { id: req.params.id }
    })
      .then((Commentaire) => {
        Commentaire.update({
          content: (content ? content : Commentaire.content)
        })
          .then(() => res.status(201).json(Commentaire))
          .catch((error) => res.status(400).json({ error }))
      })
      .catch(() => res.status(500).json({ 'error': 'Le commentaire est introuvable' }))
  } else {
    res.status(403).json({ message: "vous n'avez pas le droit de modifier ce commentaire" })
  }
}

  // Supprimer son propre commentaire
  exports.deleteCommentaire = (req, res) => {
    if (Commentaire.userId === userId) {
    Commentaire.findOne({
      where: { id: req.params.id }
    })
      .then((Commentaire) => {
        let acces = false
        order(req)
        admin(req)
        if (acces = true) {
          Commentaire.destroy({ id: req.params.id }, { truncate: true })
            .then(() => res.status(201).json({ message: 'Le commentaire a bien été supprimé.' }))
            .catch((error) => res.status(400).json({ error }))
        }
      })
      .catch(() => res.status(500).json({ 'error': 'Le commentaire est introuvable.' }))
   } else {
    res.status(403).json({ message: "vous n'avez pas le droit de supprimer ce commentaire" })
  }
};
