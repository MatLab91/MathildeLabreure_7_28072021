const postes = require("../controllers/poste.controller.js");
const {Router } = require("express")

const router = new Router()

// Créer une publication
router.post("/api/addPoste", postes.create);
// Montrer tous les postes des utilisateurs
router.get("/api/postes", postes.getAllPostes);
// Supprimer une publication
router.delete("/api/postes/:id", postes.deletePoste);


module.exports = router