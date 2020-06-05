const request = require("request");

const fetchMyIP = function(callback) {

  const website = "https://api.ipify.org/?format=json";
  request(website, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
  
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ipAddress = JSON.parse(body);
    callback(null, ipAddress.ip);
    
  });
};

module.exports = { fetchMyIP };