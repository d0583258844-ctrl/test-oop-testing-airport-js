export class Flight {
  Ticketslist;

  constructor(flightName, airline, flightNumber, maximumNumberOfPassengers) {
    this.maximumNumberOfPassengers = maximumNumberOfPassengers;
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.Ticketslist = [];
  }

  createFlight() {
    let price = Math.floor(Math.random() * 400);
    let vipPrice = Math.floor(Math.random() * 500);
    if (vipPrice < 100 && vipPrice < price) {
      vipPrice += vipPrice * 2;
    }
    if (vipPrice < 100) {
      vipPrice += (vipPrice + price) * 3;
    }
    const newFligth = {
      "Flight name": this.flightName,
      "Airline " : this.airline,
      "Flight number": this.flightNumber,
      "Regular ticket  price": `$${price}`,
      "VIP ticket price": `$${vipPrice}`,
      "Maximum number of passengers": this.maximumNumberOfPassengers,
      "Tickets list": this.Ticketslist,
    };
    return newFligth;
  }

  checkArguments() {
    if (
      typeof this.flightNumber !== "number" ||
      typeof this.maximumNumberOfPassengers !== "number"
    ) {
      return "Flight number and maximum number of passengers both must be a number!";
    }
    return;
  }
}

const fligth = new Flight("Israel", "United", 909, 8);
console.log(fligth.checkArguments());
console.log("====");
console.log(fligth.createFlight());
// console.log(fligth.checkArguments());

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
