/* EXERCISE 5

Copy the class of exercise 1.

TODO: Change the properties to private.
TODO: Fix the errors without using getter and setter functions.
TODO: Change the price to 3.5 euro and print it also on the screen on a new line.
*/
class Beverage {
  constructor(color, price, temperature = "cold") {
    // Make properties private
    const _color = color;
    let _price = price; // Use let instead of const for price
    const _temperature = temperature;

    // Public method to get information
    this.getInfo = function () {
      return `This beverage is ${_temperature} and ${_color}.`;
    };

    // Public method to get temperature
    this.getTemperature = function () {
      return _temperature;
    };

    // Change the price to 3.5 euros
    _price = 3.5;

    // Print the new price on the screen
    console.log(`Price: ${_price} euros`);
  }
}

// Instantiate an object representing cola
const cola = new Beverage("black", 2.0);

// Print the getInfo on the screen
console.log(cola.getInfo());

// Print the temperature on the screen
console.log(`Temperature: ${cola.getTemperature()}`);

/*
Properties (_color, _price, _temperature) are made private by declaring them within the constructor function.
The getInfo and getTemperature methods are defined as part of the constructor to provide public access to the information.
The price property is changed to 3.5 euros directly within the constructor.
The new price is printed on the screen after instantiating the cola object.
*/
