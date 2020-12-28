const express = require("express");
const app = express();

// const userGateway = require("./userGateway");
const callHello = require("./callHello");

app.get("/", (req, res) => {
  callHello.getMessages().then((response) => {
    let data1 = response
    res.send(`<html>${data1.data.message} World</html>`);
  });
});



module.exports = app;
