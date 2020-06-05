const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((errorIP, ip) => {

  if (errorIP) {
    return;
  }
  
  fetchCoordsByIP(ip, (errorCoordinates, coordinates) => {
    if (errorCoordinates) {
      console.log(errorCoordinates);
      return;
    }

    fetchISSFlyOverTimes(coordinates, (errorISS, response) => {
      if (errorISS) {
        console.log(errorISS);
        return;
      }

    });
  });
});