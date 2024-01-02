/* EXERCISE 6

Copy the classes of exercise 2.

TODO: Change the properties to private.
TODO: Make a const barname with the value 'Het Vervolg'.
TODO: Print the constant on the screen.
TODO: Create a function in beverage and use the constant.
TODO: Do the same in the beer class.
TODO: Print the output of these functions on the screen.
TODO: Make sure that every print is on a new line.

Use typehinting everywhere!
*/

class Beverage {
  #color;
  #price;
  #temperature;

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

// Make a const barname with the value 'Het Vervolg'.
const barName = "Het Vervolg";

// Print the constant on the screen.
console.log(barName);

// Create a function in beverage and use the constant.
Beverage.printBarName(barName);

// Do the same in the beer class.
Beer.printBarName(barName);

// Instantiate an object representing Duvel
const duvel = new Beer("Duvel", 8.5);

// Print the output of these functions on the screen.
console.log("Beverage Info: " + duvel.getInfo());
console.log("Beer Alcohol Percentage: " + duvel.getAlcoholPercentage());
