class Passengers {
  constructor(parameters) {}
}



// Student Passenger
// Properties:

// ● Name
// ● ID number
// ● Amount of money
// ● School / university name     
// Behavior:

// ● Can buy a ticket with 10% discount
// ● If the passenger does not have enough money → return false
// ● Cannot get a discount on FIRST CLASS (VIP) tickets
// ○ VIP tickets are paid at full price



// Regular Passenger
// Properties:

// ● Name
// ● ID number
// ● Amount of money
// ● Workplace
// ● Knows an airport employee (true / false)

// Behavior:
// ● Cannot buy tickets if there is not enough money → return false
// ● If the passenger knows an airport employee:
// ○ 20% discount on regular tickets
// ○ 15% discount on VIP tickets
// ● If not:
// ○ No discount