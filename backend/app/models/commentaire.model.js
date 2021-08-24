module.exports = (sequelize, Sequelize) => {
    const Commentaire = sequelize.define("commentaire", {
      content: {
        type: Sequelize.STRING
      }
    });
  
    return Commentaire;
  };