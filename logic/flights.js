//import { supportsEsModules } from "mocha/lib/utils";
"use strict";

function Flights() {
    
    function calculateNumberOfFlights(passengers, capacity)
    {
        try {
            if (passengers < 0 ) throw "The number of passengers must be a positive integer value";
            if (capacity < 0 ) throw "The capacity of the flight must be a positive integer value";

            if (passengers % capacity === 0 )

        { 
            console.log("Even number");
            return passengers / capacity;
        }
        else
        {
            return passengers / capacity + 1;
        }
        }
        catch (err) {

        }
    }
    

    function checkAircraftRevision(distanceLimit, distancesArray)
    {
         let totalDistance = distancesArray;

         if (totalDistance <= ( distanceLimit / 2))
         {
             return "The revision needs to be done within the next 3 months";
         }

         if (totalDistance > (distanceLimit / 2) <= (distanceLimit / 0.75))
         {  
            return "The revision needs to be done within the next 2 months";
         }

         if ( totalDistance > (distanceLimit / 0.75 ) <= (distanceLimit) )
         {
             return "The revision needs to be done within the next month";
         }

         if ( totalDistance > distanceLimit){
             throw "Total distance is more than the distance limit";
         }

    }
    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights()


