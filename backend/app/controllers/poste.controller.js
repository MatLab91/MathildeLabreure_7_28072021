const db = require("../models");
const Poste = db.postes;
const Op = db.Sequelize.Op;

// Créer et sauvegarder un nouveau poste
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title || !req.body.content) {
    res.status(400).send({
      message: "Ce champ ne peut pas être vide."
    });
    return;
  }
  // Créer la publication
  const dataPoste = {
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id
  };
  // Save Poste in the database
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
exports.getAll = (req, res) => {
  Poste.findAll({
    attributes: ['title', 'content', 'createdAt']
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Une erreur est apparue pendant l'affichage des postes."
    });
  });
}

// Modifier un poste
exports.update = (req, res) => {
  const id = req.params.id;

  Poste.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le poste a été modifié correctement."
        });
      } else {
        res.send({
          message: `Le poste ${id} n'a pas pu être modifié. Peut-être n'a-t-il pas été trouvé.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Une erreur est survenue lors de la modification du poste."
      });
    });
};

// Supprimer un poste
/*exports.delete = (req, res) => {
  const id = req.params.id;

  Poste.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le poste a bien été supprimé"
        });
      } else {
        res.send({
          message: "Le poste n'a pas pu être supprimé. Il n'a sûrement pas été trouvé."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer ce poste."
      });
    });
};*/