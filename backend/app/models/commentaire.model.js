module.exports = (sequelize, Sequelize) => {
  const Commentaire = sequelize.define("commentaire", {

    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'utilisateurs',
        key: 'id'
      }
    },
    posteId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'postes',
        key: 'id'
      }
    },
    content: {
      type: Sequelize.STRING,
    }
  });
  Commentaire.associate = (db) => {

    Commentaire.belongsTo(db.utilisateurs)
    Commentaire.belongsTo(db.postes)
  };

  return Commentaire;
};
  