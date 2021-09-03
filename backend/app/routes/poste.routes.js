const postes = require("../controllers/poste.controller.js");
const {Router } = require("express")
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const router = new Router()

// Créer une publication
router.post("/api/addPoste", auth, multer, postes.create);
// Montrer tous les postes des utilisateurs
router.get("/api/postes", auth, postes.getAllPostes);
// Supprimer une publication
router.delete("/api/postes/:id", auth, postes.deletePoste);



module.exports = router