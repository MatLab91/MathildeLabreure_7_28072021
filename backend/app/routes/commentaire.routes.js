const commentaires = require("../controllers/commentaire.controller.js");
const {Router } = require("express")
const auth = require('../middleware/auth');


const router = new Router()

// Créer un nouveau commentaire sous un poste
router.post("/api/poste/commentaire", commentaires.createCommentaire); //auth
// Montrer tous les commentaires d'un poste
router.get("/api/poste/commentaire/:id", commentaires.getAllCommentaires); //auth
// Modifier un commentaire
router.put("/poste/commentaire/:id", commentaires.modifyCommentaire);//auth
// Supprimer un commentaire
router.delete("/poste/commentaire/:id", commentaires.deleteCommentaire);//auth

module.exports = router