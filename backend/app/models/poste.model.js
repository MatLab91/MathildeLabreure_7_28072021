module.exports = (sequelize, Sequelize) => {
    const Poste = sequelize.define("poste", {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'utilisateurs',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      }
    });

    Poste.associate = (db) => {
      Poste.belongsTo(db.utilisateurs)
      Poste.hasMany(db.utilisateurs, { onDelete: 'CASCADE', onUpdate: 'CASCADE', as: 'poste' })
    };
  
    return Poste;
  };