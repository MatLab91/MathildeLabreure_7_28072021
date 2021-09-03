const commentaires = require("../controllers/commentaire.controller.js");
const { Router } = require("express")
const auth = require('../middleware/auth');


const router = new Router()

// Créer un nouveau commentaire sous un poste
router.post("/api/poste/commentaire", auth, commentaires.createCommentaire);
// Montrer tous les commentaires
router.get("/api/poste/commentaire", auth, commentaires.getAllCommentaires);
// Montrer tous les commentaires d'un poste
router.get("/api/poste/commentaire/:id", auth, commentaires.getCommentairesByPoste);
// Modifier un commentaire
router.put("/api/poste/commentaire/:id", auth, commentaires.modifyCommentaire);
// Supprimer un commentaire
router.delete("/api/poste/commentaire/:id", auth, commentaires.deleteCommentaire);

module.exports = router