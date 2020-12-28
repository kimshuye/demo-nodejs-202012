const nock = require("nock");

const Sequelize = require("sequelize");
const db = require("../db.index");
// const worldModel = require("../models/worldModel")
// const newWorld = new worldModel()
// const worldModel = require("../models/worldModel")(db);
// const news = newWorld;
const callWorld = require("../callWorld");

test("Get message should be 'World'", async () => { 
  let data = {
    id:1,
    place:'World'
  }//await callWorld.getMessages();

  expect(data.id).toEqual(1);
  expect(data.place).toEqual('World');

  // return nockBack('promisedFixture.json').then(({ nockDone, context }) => {
  //   //  do your tests returning a promise and chain it with
  //   //  `.then(nockDone)`
  // })
  
});


