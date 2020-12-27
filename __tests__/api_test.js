const nock = require("nock");
const process = require("process");

const request = require("supertest");
const app = require("../app");

test("All users API Test", (done) => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/users")
      .reply(200,
        [
          {
            id: 1,
            name: "name one",
            username: "God",
            email: "Sincere@april.biz1",
          },
          {
            id: 2,
            name: "name two",
            username: "Thor",
            email: "Sincere@april.biz2",
          }
        ]
      );
      
  request(app).get("/users").expect("Content-Type", /json/).expect(
    200,
    '{"code":200,"data":[{"id":1,"name":"name one","username":"God","email":"Sincere@april.biz1"},{"id":2,"name":"name two","username":"Thor","email":"Sincere@april.biz2"}]}',
    done
  );

});


test("should be user 1 Test", (done) => {
  // Mock server
  nock("https://jsonplaceholder.cypress.io")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/users/1")
      .reply(200,
        {
          id: 1,
          name: "name mock",
          username: "Bret",
          email: "Sincere@april.biz1",
        },
      );


  request(app).get("/users/1").expect("Content-Type", /json/).expect(
    200,
    {
      id: 1,
      name: "name mock",
      username: "Bret",
      email: "Sincere@april.biz1",
    },
    done
  );
});
