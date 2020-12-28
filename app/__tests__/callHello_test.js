const nock = require("nock");
// const userGateway = require("../userGateway");
const callHello = require("../callHello");

test("Get Message should be 'Hello'", async () => { 
    // Mock server
    nock("http://104.236.50.54:8080")
        .defaultReplyHeaders({ "access-control-allow-origin": "*" })
        .get("/messages")
        .reply(200,
          {"message":"Hello"}
          );
    // Verify
    const response = await callHello.getMessages();
    expect(response.code).toEqual(200);
    expect(response.data.message).toEqual('Hello');
});

