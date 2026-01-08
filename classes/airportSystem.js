import { Flight } from "./flight.js";
import { Tickets, VipTicket } from "./tickets.js";

class AirportSystem {
  #flights;
  constructor() {
    this.#flights = [];
  }
  createFlights() {
    const flight_1 = new Flight("Israel", "UnitedAir", 90506, 10);
    const flight_2 = new Flight("Egypt", "Arkia", 45645, 20);
    const flight_3 = new Flight("USA", "ELAL", 12305, 30);
    const flight_11 = flight_1.createFlight();
    const flight_22 = flight_2.createFlight();
    const flight_33 = flight_3.createFlight();
    this.#flights.push(flight_11, flight_22, flight_33);
  }

  TicketsForEachFlight(flight_11, flight_22, flight_33) {
    const ticket_1 = new Tickets("a", 123);
    const ticket_3 = new Tickets("b", 88);
    const ticket_4 = new Tickets("c", 94);
    const ticket_2 = new Tickets("d", 78);
    const ticket_5 = new Tickets("e", 98);
    const ticket_6 = new Tickets("f", 78);
    const ticket_7 = new Tickets("g", 56);
    const ticket_8 = new Tickets("h", 100);
    const ticket_9 = new Tickets("i", 56);
    const ticket_10 = new Tickets("j", 50);
    const num1 = flight_11["Maximum number of passengers"];
    const num2 = flight_22["Maximum number of passengers"];
    const num3 = flight_33["Maximum number of passengers"];
  }
}
