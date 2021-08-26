const utilisateurs = require("../controllers/utilisateur.controller.js");
const {Router } = require("express")

const router = new Router()

// Créer un nouvel utilisateur
router.post("/api/signup", utilisateurs.signup);
// Se connecter
router.post("/api/login", utilisateurs.login);
// Afficher un utilisateur
router.get("/api/profil/:id", utilisateurs.getOneUtilisateur)
// Supprimer un utilisateur
router.delete("api/profil/:id", utilisateurs.delete);


module.exports = router