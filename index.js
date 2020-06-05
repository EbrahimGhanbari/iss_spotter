
const nextISSTimesForMyLocation = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});









/*
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

*/