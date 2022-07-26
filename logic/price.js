"use strict";
function Prices() {
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
  function calculateFinalPrice(
    basePrice,
    variationPassengerType,
    variationFlightType
  ) {
    //let finalPrice = basePrice * (variationFlightType + variationPassengerType);
    let finalPrice =
      basePrice +
      variationPassengerType * 100 +
      (basePrice + variationFlightType * 100);

    return roundToTwo(finalPrice);
  }

  function calculcateDefaultFinalPrice(basePrice, passengerType, flightType) {
    const defaultValues = {
      regular: 5,
      vip: 5,
      economy: 3,
      business: 1,
    };

    //  console.log('basePrice', basePrice);
    //  console.log('passengerType', passengerType);
    //  console.log('flightType', flightType);

    if (passengerType === 'vip' && flightType === 'economy')
    {
      // console.log('defaultValues.vip', defaultValues.vip);
      let vipEco = basePrice - defaultValues.vip * 100 + (basePrice + defaultValues.economy * 100);
      // console.log('vipEco', vipEco);
      return vipEco;
      

    } else if (passengerType === 'vip' && flightType === 'business'){
      let vipBis = basePrice - defaultValues.vip * 100 + (basePrice + defaultValues.business * 100);
      // console.log('vipBis', vipBis);
      return vipBis;

    } else if (passengerType === 'regular' && flightType === 'economy'){
      let regEco = basePrice - defaultValues.regular * 100 + (basePrice + defaultValues.economy * 100);
      // console.log('regEco', regEco);
      return regEco;

    } else {
      let regBis = basePrice - defaultValues.regular * 100 + (basePrice + defaultValues.business * 100);
      // console.log('regBis', regBis);
      return regBis;
    };
  }

  function calculateTotalFinalPrice( numberofSeats, passengerType, flightType, basePrice) {
    
    let totalFinalPrice = numberofSeats * calculcateDefaultFinalPrice(basePrice, passengerType, flightType);
    
    return totalFinalPrice;

  }
  return {
    calculateFinalPrice,
    calculcateDefaultFinalPrice,
    calculateTotalFinalPrice,
  };
}
module.exports = Prices();
