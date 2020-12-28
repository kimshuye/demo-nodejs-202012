class Welcometo extends Sequelize.Model {}

const createWelcometoModel = (db) => {
 const model = Welcometo.init(
 {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    name: Sequelize.STRING,
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
