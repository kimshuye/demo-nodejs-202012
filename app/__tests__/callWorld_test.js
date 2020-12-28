const nock = require("nock");

const Sequelize = require("sequelize");
const db = require("../db.index");
const worldModel = require("../models/worldModel")(db, Sequelize);
// const userGateway = require("../userGateway");
// const callWorld = require("../callWorld");

test("Get message should be 'World'", async () => { 
    
  
});


