
const Sequelize = require("sequelize");
class Welcometo extends Sequelize.Model {}

const createWelcometoModel = (db) => {
 const model = Welcometo.init(
 {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    place: Sequelize.STRING,
  },
  {
    sequelize: db,
    modelName: "welcometo",
    freezeTableName: true,
  }
 );
 return model;
};

module.exports = Welcometo;
