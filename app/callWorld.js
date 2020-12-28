

const Sequelize = require("sequelize");
const db = require("./db.index");
const Welcometo = require("./models/worldModel")

function getMessages() {

  return new Promise((resolve, reject) => {
    Welcometo.findAll()
    .then((data)=>{
      resolve(data);
    })
    .catch((err)=>{
      console.log("error occurred", err);
      reject(err);
    })
  });
  return {
    id:1,
    place:"World"
  };
}


module.exports = { getMessages };
