const bcrypt = require('bcrypt');
const db = require("../models");
const jwt = require('jsonwebtoken');
const Op = db.Sequelize.Op;
const Utilisateur = db.utilisateurs;
const jwtUtils = require('../utils/jwt.utils');
const tokenKey = process.env.SECRET_KEY;
const order = jwtUtils.decoderToken;
const admin = jwtUtils.decoderTokenAdmin;
require('dotenv').config({ path: './variables.env' });


// Expressions régulières pour vérifier email et mot de passe
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

// Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base de données
exports.signup = (req, res, next) => {

    //Vérification des inputs avec les expressions régulières
    if (EMAIL_REGEX.test(req.body.email)) {
        console.log('Adresse email correcte')
    } else { res.status(400).json({ 'message': "L'adresse email n'est pas valide." }); }
    if (PASSWORD_REGEX.test(req.body.password)) {
    } else { return res.status(400).json({ 'error': 'Mot de passe invalide. Le mdp doit contenir entre 4 et 8 caractères et doit inclure 1 nombre)' }) };

    let password = req.body.password;



    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const data = {
                ...req.body,
                password: hash,
            };

            Utilisateur.create(data)
                .then(function () {
                    res.status(201).json({ message: 'Un utilisateur a été créé.' });
                })
                .catch(error => res.status(403).json({ error }));
        })

        .catch(error => { res.status(500).json({ message: 'Erreur lors de la création du compte' }) })
}

// Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant userID 
// depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID)
exports.login = (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    if (email == '' || password == '') {
        return res.status(400).json({ 'error': 'certains champs sont manquants' });
    }

    Utilisateur.findOne({ where: { email: email } })
        .then(Utilisateur => {

            if (Utilisateur) {
                bcrypt.compare(password, Utilisateur.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        } else {
                            res.status(200).json({
                                userId: Utilisateur.id,
                                token: jwtUtils.genererToken(Utilisateur)

                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(500).send({
                            message:
                                error.message || "Une erreur est apparue pendant la création du poste."
                        });
                    });
            } else {
                return res.status(400).json({ alerte: "Cet utilisateur n'existe pas." })
            }
        })
        .catch(error => res.status(500).json({ error }));
}


// Afficher un utilisateur

exports.getOneUtilisateur = (req, res, next) => {
    let token = req.params.id
    const decodedToken = jwt.verify(token, tokenKey);
    const userId = decodedToken.userId;

    Utilisateur.findOne({
        where: { id: userId }
    })
        .then(Utilisateur => res.status(200).json(Utilisateur))
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })
};

// L'utilisateur peut supprimer son profil
exports.delete = (req, res) => {
    Utilisateur.findOne({
        where: { id: req.params.id }
    })
        .then((Utilisateur) => {
            let acces = false
            order(req)
            admin(req)
            if (acces = true) {
                Utilisateur.destroy({ id: req.params.id }, { truncate: true })
                    .then(() => res.status(201).json({ message: 'Utilisateur supprimé' }))
                    .catch((error) => res.status(400).json({ error }))
            }
        })
        .catch(() => res.status(500).json({ 'error': 'Utilisateur introuvable' }))
};

// L'utilisateur modifie son profil

exports.modifyUser = (req, res) => {
    let token = req.body.token
    const decodedToken = jwt.decode(token, tokenKey);
    const userId = decodedToken.userId;
    let name = req.body.name
    Utilisateur.findOne({
        where: { id: req.params.id }
    })
        .then((Utilisateur) => {
            if (Utilisateur.id === userId) {
                Utilisateur.update({
                    name: (name ? name : Commentaire.name)
                  })
                    .then(() => res.status(201).json({ message: 'Utilisateur modifié' }))
                    .catch((error) => res.status(400).json({ error }))
            }
        })
        .catch(() => res.status(500).json({ 'error': 'Utilisateur introuvable' }))
};