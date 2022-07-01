function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {
    //for (let i = 0; i < distributedPassengers.length; i++) {
      let one = distributedPassengers.vipPassengersWithBusinessSeats;
      let two = distributedPassengers.vipPassengersWithEconomySeats;
      let three = distributedPassengers.regularPassengersWithBusinessSeats;
      let four = distributedPassengers.regularPassengersWithEconomySeats;
      let total = one + two + three + four;
      return total;
    //}
  }
  return { calculateTotalDistributedPassengers };
}
module.exports = Util();
