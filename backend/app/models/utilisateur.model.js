module.exports = (sequelize, Sequelize) => {
    const Utilisateur = sequelize.define("utilisateur", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue:0
      },
      /*token: {
        type: Sequelize.STRING
      } */
    });
  
    return Utilisateur;
  };