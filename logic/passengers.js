import { supportsEsModules } from "mocha/lib/utils";

function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray)
    {
        let totalPassengers  = 0;
        for (let i = 0; i < passengersArray.length; i++)
        {
            totalPassengers  += passengersArray[i];
        }
        
        if (totalPassengers < flightCapacity)
        {
            return totalPassengers;
        }

        if (totalPassengers > flightCapacity) throw "Passenger total exceeds the flight capacity";
        
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, 
        regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight)
    { 
        let vipPassengersAssignedToBusinessSeats = 0;
        let vipPassengersAssignedToEconomySeats = 0;
        let regularPassengersAssignedToBusinessSeats = 0;

        vipPassengersAssignedToBusinessSeats = vipPassengers / businessSeatsPerFlight;
        vipPassengersNotSeated = vipPassengers % businessSeatsPerFlight;

        //console.log('vipPassengersAssignedToBusinessSeats', vipPassengersAssignedToBusinessSeats);
        
        
        if (vipPassengersNotSeated !== 0)
        {
            vipPassengersAssignedToEconomySeats = vipPassengersNotSeated / economySeatsPerFlight;
            vipPassengersStillNotSeated = vipPassengersNotSeated % economySeatsPerFlight;
        }

        if (businessSeatsPerFlight !== 0)
        {
            regularPassengersAssignedToBusinessSeats = regularPassengers / businessSeatsPerFlight;
            regularPassengersNotSeated = regularPassengers % businessSeatsPerFlight;
        }

        if (economySeatsPerFlight !== 0)
        {
            regualarPassengersAssignedToEconomySeats = regularPassengersNotSeated / economySeatsPerFlight;
            regularPassengersStillNotSeated = regularPassengersNotSeated % economySeatsPerFlight;
        }

        var distributedPassengers = {
            vipPassengersWithBusinessSeats: vipPassengersAssignedToBusinessSeats,
            vipPassengersWithEconomySeats: vipPassengersAssignedToEconomySeats,
            regularPassengersWithBusinessSeats: regularPassengersAssignedToBusinessSeats,
            regularPassengersWithEconomySeats: regualarPassengersAssignedToEconomySeats
        };
        return { distributedPassengers };

        // vipPassengersBusinessSeatsPerFlightTotal = vipPassengers + businessSeatsPerFlight
        // businessSeatsPerFlightTotal = businessSeatsPerFlight;
        // for (let i = 0; i < vipPassengersBusinessSeatsPerFlightTotal.length; i++)
        // {
        //     vipPassengers === businessSeatsPerFlightTotal
        //     totalPassengers  += passengersArray[i];
        // }

    }
    return { checkFlightCapacity, distributeAllSeatsToAllPassengers }; //exports function
}

module.exports = Passengers();

