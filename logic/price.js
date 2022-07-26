function Prices() {

    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType)
    {

        let finalPrice = basePrice * (variationFlightType + variationPassengerType);
        return finalPrice;

    }

    function calculcateDefaultFinalPrice(basePrice, passengerType, flightType){
        const defaultValues = {
            regular: 0.05,
            vip: 0.05,
            economy: 0.03,
            business: 0.10
        };

        let regBis = ((basePrice - (defaultValues.regular * 100)) + (basePrice + (defaultValues.business * 100)));
        let regEco = ((basePrice - (defaultValues.regular * 100)) + (basePrice + (defaultValues.economy * 100)));

        let vipBis = ((basePrice - (defaultValues.vip * 100)) + (basePrice + (defaultValues.business * 100)));
        let vipEco = ((basePrice - (defaultValues.vip * 100)) + (basePrice + (defaultValues.economy * 100)));

        const defaultFinalPricesCombo = {
            regBis: regBis,
            regEco: regEco,
            vipBis: vipBis,
            vipEco: vipEco
        };
        return defaultFinalPricesCombo;
    }

    function calculateTotalFinalPrice(numberofSeats, passengerType, flightType, basePrice){

        totalFinalPrice = numberofSeats * calculcateDefaultFinalPrice(passengerType, flightType, basePrice);
        return totalFinalPrice;
    }

    return { calculateFinalPrice, calculcateDefaultFinalPrice, calculateTotalFinalPrice };

}
module.exports = Prices();
