const commentaires = require("../controllers/commentaire.controller.js");
const {Router } = require("express")

const router = new Router()

// Créer un nouveau commentaire sous un poste
router.post("/api/poste/commentaire", commentaires.createCommentaire);
// Montrer tous les commentaires d'un poste
router.get("/api/poste/commentaire/:id", commentaires.getAllCommentaires);
// Modifier un commentaire
router.put("/postes/commentaire/:id", commentaires.modifyCommentaire);
// Supprimer un commentaire
router.delete("/postes/:id/commentaire/:id", commentaires.deleteCommentaire);

module.exports = router