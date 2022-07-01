//import { supportsEsModules } from "mocha/lib/utils";

function Passengers() {
  function checkFlightCapacity(flightCapacity, passengersArray) {
    let totalPassengers = 0;
    for (let i = 0; i < passengersArray.length; i++) {
      totalPassengers += passengersArray[i];
    }

    if (totalPassengers < flightCapacity) {
      return totalPassengers;
    }

    if (totalPassengers > flightCapacity)
      throw "Passenger total exceeds the flight capacity";
  }

  function distributeAllSeatsToAllPassengers(
    vipPassengers,
    regularPassengers,
    nrOfFlights,
    businessSeatsPerFlight,
    economySeatsPerFlight
  ) {
    let passengers_vip_seated_business = 0,
      passengers_vip_seated_economy = 0,
      passengers_regular_seated_business = 0,
      passengers_regular_seated_economy = 0,
      passengers_vip_unseated = 0, // not necessary but nice to have
      passengers_economy_unseated = 0; // see above

    let business_seats = businessSeatsPerFlight,
      economy_seats = economySeatsPerFlight;

    // use a for..of loop, assuming passengers_vip is an array
    for (let i = 0; i < vipPassengers; i++) {
        console.log("vipPassengers:", vipPassengers);
      if (business_seats > 0) {
        business_seats--; // reduce number of available business seats
        passengers_vip_seated_business++; // increase number of seated passengers
        
        //console.log('passengers_vip_seated_business', passengers_vip_seated_business);
      } else if (economy_seats > 0) {
        // if there are no business seats available, assign to economy_seats
        economy_seats--;
        passengers_vip_seated_economy++;
      } else {
        // no more seats, bummer!
        passengers_vip_unseated++;
      }
    }
    // do the same for regular passengers
    for (let i = 0; i < regularPassengers.length; i++) {
      if (business_seats > 0) {
        business_seats--; // reduce number of available business seats
        passengers_regular_seated_business++; // increase number of seated passengers
      } else if (economy_seats > 0) {
        // if there are no business seats available, assign to economy_seats
        economy_seats--;
        passengers_regular_seated_economy++;
      } else {
        // no more seats, bummer!
        passengers_economy_unseated++;
      }
    }

    return {
      vipPassengersWithBusinessSeats: passengers_vip_seated_business,
      vipPassengersWithEconomySeats: passengers_vip_seated_economy,
      regularPassengersWithBusinessSeats: passengers_regular_seated_business,
      regularPassengersWithEconomySeats: passengers_regular_seated_economy,
    };
  }
  return { checkFlightCapacity, distributeAllSeatsToAllPassengers }; //exports function
}

module.exports = Passengers();
