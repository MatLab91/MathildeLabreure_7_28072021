const db = require("../models");
const Poste = db.postes;
const Op = db.Sequelize.Op;

// Create and Save a new Poste
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Ce champ ne peut pas être vide"
    });
    return;
  }

  // Create a Poste
  const poste = {
    title: req.body.title,
    description: req.body.description,
  };

  // Save Poste in the database
  Poste.create(poste)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est apparue pendant la création du poste."
      });
    });
};