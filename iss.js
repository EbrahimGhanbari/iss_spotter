const request = require("request");

const fetchMyIP = function(callback) {
//This function gets the IP of the computer
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

// This func gets the latitude
const fetchCoordsByIP = (ip, callback) => {
  const website = "https://ipvigilante.com/" + ip;

  request(website,(error, response, body) => {

    const data = JSON.parse(body);

    if (data.errors) {
      const errCode = data.errors[0].code;

      callback(`It didn\'t work! Error: Status Code ${errCode} when fetching Coordinates for IP: ${body}`, null);
      
      return;
    }
    
    const coordinates = {
      latitude: data.data.latitude,
      longitude: data.data.longitude
    };

    callback(null, coordinates);

  });
};


module.exports = { fetchMyIP, fetchCoordsByIP};

