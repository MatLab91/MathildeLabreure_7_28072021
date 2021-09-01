const jwt = require('jsonwebtoken');
const db = require("../models");
const Poste = db.postes;
const Utilisateur = db.utilisateurs;
const Op = db.Sequelize.Op;
const acces = require('../utils/jwt.utils');
const order = acces.decoderToken;
const admin = acces.decoderTokenAdmin;
require('dotenv').config({ path: '../variables.env' });
const tokenKey = process.env.SECRET_KEY;


const regex = /^([A-Za-z0-9\s.])*$/


// Créer et sauvegarder un nouveau poste
exports.create = (req, res) => {
  let token = req.body.token
  const decodedToken = jwt.decode(token, tokenKey);
  // Valider l'entrée
  if (!req.body.title || !req.body.content) {
    res.status(400).send({
      message: "Ce champ ne peut pas être vide."
    });
    return;
  }
  
  //on decode le token
  const userId = decodedToken.userId;
  // Créer la publication
  const dataPoste = {
    title: req.body.title,
    content: req.body.content,
    userId: userId,
    imageURL: `http://localhost:8080/images/${req.file.filename}`
  };
  // Sauvegarder le poste dans la base de données
  Poste.create(dataPoste)

    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Une erreur est apparue pendant la création du poste."
      });
    });
};

// Afficher tous les postes
exports.getAllPostes = async (req, res) => {
  let acces = false
  order(req)
  admin(req)
  if (acces = true) {
    await Poste.findAll({
      include: [
        {
          model: Utilisateur,
          attributes: ['name'],
          required: false
        }
      ]
    })
      .then((Postes) => res.status(200).json(Postes))
      .catch(error => res.status(404).json({ error }))
  } else { (console.log('false')), window.location = 'http://localhost:8080/login' }
}

// Supprimer un poste
exports.deletePoste = (req, res) => {
  Poste.findOne({
    where: { id: req.params.id },
  })
    .then((Poste) => {
      let acces = false
      order(req)
      admin(req)
      if (acces = true) {
        Poste.destroy({ id: req.params.id }, { truncate: true })
          .then(() => res.status(201).json({ message: 'Le poste a bien été supprimé' }))
          .catch((error) => res.status(400).json({ error }))
      }
    })
    .catch(() => res.status(500).json({ 'error': 'Publication introuvable' }))

};