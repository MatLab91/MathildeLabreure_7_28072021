const utilisateurs = require("../controllers/utilisateur.controller.js");
const {Router } = require("express")

const router = new Router()

// Créer un nouvel utilisateur
router.post("/api/signup", utilisateurs.signup);
// Se connecter
router.post("/api/login", utilisateurs.login);
// Modifier le profil d'un utilisateur
// router.put("/user/:id", utilisateurs.update);
// Supprimer un utilisateur
// router.delete("/user/:id", utilisateurs.delete);
// Afficher les utilisateurs
// router.get("/api/users", utilisateurs.getAll)


module.exports = router