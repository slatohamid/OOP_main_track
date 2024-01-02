/* EXERCISE 7

Copy your solution from exercise 6

TODO: Make a static property in the Beverage class that can only be accessed from inside the class called address which has the value "Melkmarkt 9, 2000 Antwerpen".
TODO: Print the address without creating a new instant of the beverage class 2 times in two different ways.

Use typehinting everywhere!
*/

class Beverage {
  #color;
  #price;
  #temperature;
  static address = "Melkmarkt 9, 2000 Antwerpen";

  constructor(color, price, temperature = "cold") {
    this.#color = color;
    this.#price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `This beverage is ${this.#temperature} and ${this.#color}.`;
  }

  getTemperature() {
    return this.#temperature;
  }

  static printBarName(barName) {
    console.log(barName);
  }

  static printAddress() {
    console.log(Beverage.address);
  }
}

class Beer extends Beverage {
  #name;
  #alcoholPercentage;

  constructor(
    name,
    alcoholPercentage,
    color = "blond",
    price = 3.5,
    temperature = "cold"
  ) {
    super(color, price, temperature);
    this.#name = name;
    this.#alcoholPercentage = alcoholPercentage;
  }

  getAlcoholPercentage() {
    return this.#alcoholPercentage;
  }

  static printBarName(barName) {
    console.log(barName);
  }
}

const barName = "Het Vervolg";

console.log(barName);
Beverage.printBarName(barName);
Beer.printBarName(barName);
console.log("Beverage Info: " + duvel.getInfo());
console.log("Beer Alcohol Percentage: " + duvel.getAlcoholPercentage());
Beverage.printAddress();
