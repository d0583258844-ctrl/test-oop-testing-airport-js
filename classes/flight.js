export class Flight {
  Ticketslist;

  constructor(flightName, airline, flightNumber, maximumNumberOfPassengers) {
    this.maximumNumberOfPassengers = maximumNumberOfPassengers;
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.Ticketslist = [];  
  }

  checkArguments(flightNumber, airline) {
    if (!flightNumber || !airline) {
      return "One or more requerd filed misseing";
    }
    if (typeof this.flightNumber !== "number" || typeof this.maximumNumberOfPassengers !== "number") {
      return "Flight number and maximum number of passengers both must be a number!";
    }
  }

  createFlight() {
    let price = Math.floor(Math.random() * 400);
    let vipPrice = Math.floor(Math.random() * 500);
    if (vipPrice < 100 && vipPrice < price) {
      vipPrice += price * 2;
    }
    if (vipPrice < 100) {
      vipPrice += vipPrice * 3;
    }
    const newFligth = {
      FlightName: this.flightName,
      Airline: this.airline,
      FlightNumber: this.flightNumber,
      RegularTicketPrice: `$${vipPrice}`,
      VIPticketPrice: `$${price}`,
      MaximumNumberOfPassengers: this.maximumNumberOfPassengers,
      Ticketslist: this.Ticketslist,
    };
    return newFligth;
  }
}

const fligth = new Flight("Buda", "United", 4545460, 8);
console.log(fligth);
console.log(fligth.createFlight());

// Each flight must have:
//  Flight name
//  Airline
//  Flight number
//  Maximum number of passengers did constant
//  Regular ticket price   prices with randome
//  VIP ticket price
//  Tickets list

//  The list size must match the maximum number of
// passengers

//  At the start, tickets have no owner name
