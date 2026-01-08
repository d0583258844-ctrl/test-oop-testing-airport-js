import { Flight } from "./flight.js";

class AirportSystem {
  #flights;
  constructor() {
    this.#flights = [];
  }
  createFlights() {
    const flight_1 = new Flight("Israel", "UnitedAir", 90506, 12);
    const flight_2 = new Flight("Egypt", "Arkia", 45645, 6);
    const flight_3 = new Flight("USA", "ELAL", 12305, 18);
    const flight_11 = flight_1.createFlight();
    const flight_22 = flight_2.createFlight();
    const flight_33 = flight_3.createFlight();
    this.#flights.push(flight_11, flight_22, flight_33);
    return this.#flights;
  }
}

// ● Creates 3 flights (set/ask or randomize needed data) :            I did
// ● For each flight:                          I need to builde the tickets first
// ○ 90% regular tickets
// ○ 10% VIP tickets
// ● Stores all flights inside the airport

const air = new AirportSystem();
console.log(air.createFlights());
