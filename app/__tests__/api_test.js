const nock = require("nock");
const process = require("process");

const request = require("supertest");
const app = require("../app");

test("Show 'Hello World' Test", (done) => {
  // Mock server
  nock("http://localhost:3000")
      // .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/")
      .reply(200,
        'Hello World'
      );
      
  request(app).get("/").expect(
    200,
    '<html>Hello World</html>',
    done
  );

});


