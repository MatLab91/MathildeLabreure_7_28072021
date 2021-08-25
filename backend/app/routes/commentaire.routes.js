const commentaires = require("../controllers/commentaire.controller.js");
const {Router } = require("express")

const router = new Router()

// Créer un nouveau commentaire sous un poste
//router.post("/api/postes/:id/addcomment", commentaires.create);
// Montrer tous les commentaires d'un poste
//router.get("/api/postes/:id/comments", commentaires.getAll);
// Modifier un commentaire
//router.put("/postes/:id/comments/:id", commentaires.update);
// Supprimer un commentaire
//router.delete("/postes/:id/comments/:id", commentaires.delete);


module.exports = router