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
  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}
module.exports = Util();
