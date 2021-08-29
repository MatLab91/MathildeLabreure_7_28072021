module.exports = (sequelize, Sequelize) => {
  const Poste = sequelize.define("poste", {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  });

  Poste.associate = (db) => {
    Poste.belongsTo(db.utilisateurs, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  };

  return Poste;
};