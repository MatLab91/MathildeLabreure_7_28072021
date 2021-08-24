const db = require("../models");
const Commentaire = db.commentaires;
const Op = db.Sequelize.Op;

// Créer et sauvegarder un nouveau commentaire
exports.create = (req, res) => {
  const id = poste.params.id;
  // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Ce champ ne peut pas être vide"
    });
    return;
  }

  // Créer un commentaire
  const commentaire = {
    content: req.body.content,
  };

  // Sauvegarder le commentaire dans la base de données
  Commentaire.create(commentaire)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur est apparue pendant la création du commentaire."
      });
    });
};

// Afficher les commentaires pour chaque postes
exports.getAll = (req, res) => {
    const contennt = req.query.content;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Commentaire.findAll({ //Tutorial.findAll({ where: condition })
    attributes: ['title', 'description', 'createdAt'] //
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Une erreur est apparue pendant l'affichage des commentaires."
    });
  });
}

//Modifier un commentaire
exports.update = (req, res) => {
    const id = req.params.id;
  
    Commentaire.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Le commentaire a bien été modifié"
          });
        } else {
          res.send({
            message: `Le commentaire à modifier n'a pas été trouvé.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Une erreur est survenue lors de la modification du commentaire id=" + id
        });
      });
  };

  // Supprimer un commentaire
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Commentaire.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Le commentaire a bien été supprimé"
          });
        } else {
          res.send({
            message: `Ce commentaire n'a pas pu être supprimé.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ce commentaire n'a pas pu être supprimé."
        });
      });
  };
