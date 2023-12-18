class Beverage {
  constructor(color, price, temperature = "cold") {
    this.color = color;
    this.price = price;
    this.temperature = temperature;
  }

  getInfo() {
    return `This beverage is ${this.temperature} and ${this.color}.`;
  }

  getTemperature() {
    return this.temperature;
  }
}

class Beer extends Beverage {
  constructor(
    name,
    alcoholPercentage,
    color = "blond",
    price = 3.5,
    temperature = "cold"
  ) {
    super(color, price, temperature);
    this.name = name;
    this.alcoholPercentage = alcoholPercentage;
  }

  getAlcoholPercentage() {
    return this.alcoholPercentage;
  }
}

// Instantiate an object representing Duvel
const duvel = new Beer("Duvel", 8.5);

// Print the getAlcoholPercentage in two different ways
console.log(duvel.getAlcoholPercentage()); // Method 1
console.log("Alcohol Percentage: " + duvel.getAlcoholPercentage()); // Method 2

// Print the color on the screen
console.log("Color: " + duvel.color);

// Print the getInfo on the screen
console.log(duvel.getInfo());
