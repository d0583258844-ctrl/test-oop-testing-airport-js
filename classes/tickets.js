export class Tickets {
  constructor(name, price) {
    this.ticketNumber = Math.random().toString().slice(2, 11);
    this.name = name;
    this.price = price;
  }
}

class VipTicket extends Tickets {
  constructor(name, price) {
    super(name, price);
    extra = ["Free alcohol", "Free food", "Hot towels"];
  }
}
