module.exports = (sequelize, Sequelize) => {
  const Commentaire = sequelize.define("commentaire", {
    content: {
      type: Sequelize.STRING,
    }
  });

  Commentaire.associate = (db) => {
    Commentaire.belongsTo(db.utilisateurs, {
      foreignKey: 'userId',
    })
    Commentaire.belongsTo(db.postes, {
      foreignKey: 'posteId',
    })
  };

  return Commentaire;
};
