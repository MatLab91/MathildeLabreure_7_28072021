module.exports = (sequelize, Sequelize) => {
    const Poste = sequelize.define("poste", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Poste;
  };