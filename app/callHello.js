const axios = require("axios");

function getMessages() {
  return axios
    .get(`http://104.236.50.54:8080/messages`)
    .then(function (response) {
      return {
        code: response.status,
        data: response.data,
      };
    })
    .catch(function (error) {
      return {
        code: 500,
        response: error,
      };
    });
}


module.exports = { getMessages };
