"use strict";
function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {

      let one = distributedPassengers.vipPassengersWithBusinessSeats;
      let two = distributedPassengers.vipPassengersWithEconomySeats;
      let three = distributedPassengers.regularPassengersWithBusinessSeats;
      let four = distributedPassengers.regularPassengersWithEconomySeats;
      let total = one + two + three + four;
      return total;
  }

  function calculateTotalNumberOfPassengers(passengersArray){

    const reducedPassengersArray = passengersArray.reduce((accumulator, value) => {
      return accumulator + value;
        }, 0);

        console.log('reducedPassengersArray:', reducedPassengersArray);

        return reducedPassengersArray;
  }

  function checkInput(input) {
    let inputAsNumber = parseInt(input);
      if (inputAsNumber.length !== 0 && typeof inputAsNumber === 'number') {
        return;
      } else {
        throw "The input is incorrect, please try again";
      }
  }

  function calculateTotalDistance(distancesArray){

    for (let i = 0; i < distancesArray.length;){
      if (Math.sign(distancesArray[i]) !== 1 | 0 ){
        throw "There is an issue with one of the distances";
      } else {

        const reducedDistancesArray = distancesArray.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
    
        return reducedDistancesArray;
      }
    }
    }

    function calculateBonusPoints(distancesArrayBis, distancesArrayEco, businessBonus, economyBonus){

      let businessBonusPoints = calculateTotalDistance(distancesArrayBis) * businessBonus;

      let economyBonusPoints = calculateTotalDistance(distancesArrayEco) * economyBonus;

      let totalBonusPoints = businessBonusPoints + economyBonusPoints;

      return totalBonusPoints;
    }
    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
  }
  
module.exports = Util();
