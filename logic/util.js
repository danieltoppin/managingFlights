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
      
      //if (input.length !== 0 && !isNan(input)) {
        console.log('input', input);
      if (input.length !== 0) {
        return;
      } else {
        throw "The input is incorrect, please try again";
      }
  }

  function calculateTotalDistance(distancesArray){

    // CHECK THAT DISTANCES ARRAY VALUES ARE NOT NEGATIVE

    const reducedDistancesArray = distancesArray.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    return reducedDistancesArray;

    };

    function calculateBonusPoints(distancesArrayBis, distancesArrayEco, businessBonus, economyBonus){

      let businessBonusPoints = calculateTotalDistance(distancesArrayBis) * businessBonus;

      let economyBonusPoints = calculateTotalDistance(distancesArrayEco) * economyBonus;

      let totalBonusPoints = businessBonusPoints + economyBonusPoints;

      return totalBonusPoints;
    }
    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
  }
  
module.exports = Util();
