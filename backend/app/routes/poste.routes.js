const postes = require("../controllers/poste.controller.js");
const {Router } = require("express")
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const router = new Router()

// Créer une publication
router.post("/api/addPoste", postes.create); //auth, multer, 
// Montrer tous les postes des utilisateurs
router.get("/api/postes", postes.getAllPostes); //auth
// Supprimer une publication
router.delete("/api/postes/:id", postes.deletePoste); // auth, multer, 


module.exports = router