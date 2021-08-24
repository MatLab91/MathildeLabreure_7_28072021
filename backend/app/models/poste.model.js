module.exports = (sequelize, Sequelize) => {
    const Poste = sequelize.define("poste", {
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      }
    });
  
    return Poste;
  };