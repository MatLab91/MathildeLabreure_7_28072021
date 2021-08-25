const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './variables.env' });
const tokenKey = process.env.SECRET_KEY;

exports.genererToken = (Utilisateur) => {
  return jwt.sign({
    userId: Utilisateur.id,
    isAdmin: Utilisateur.isAdmin
  },
    tokenKey,
    { expiresIn: '10h' })
}
exports.decoderToken = (req, res, next) => {
  try {
    let acces = false
    const token = req.body
    const decodedToken = jwt.verify(token, tokenKey);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      return acces = true
    }
  } catch {
    () => {
      res.status(401).json({
        error: new Error('Invalid request!')
      })
    }

  }

};

exports.decoderTokenAdmin = (req, res, next) => {
  try {
    let acces = false
    const token = req.body
    const decodedToken = jwt.verify(token, tokenKey);
    const isAdmin = decodedToken.isAdmin;
    if (isAdmin !== true) {
      throw 'Invalid user ID';
    } else {
      return acces = true
    }
  } catch {
    () => {
      res.status(401).json({
        error: new Error('Invalid request!')
      })
    }
  }

};