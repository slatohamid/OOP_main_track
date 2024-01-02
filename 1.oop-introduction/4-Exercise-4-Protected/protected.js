/* EXERCISE 4

Copy the code of exercise 3 to here and delete everything related to cola.

TODO: Make all properties protected.
TODO: Make all the other prints work without error without changing the beverage class.
TODO: Don't call getters in de child class.

USE TYPEHINTING EVERYWHERE!
*/
class Beverage {
  constructor(name, alcoholPercentage, color) {
    this._name = name;
    this._alcoholPercentage = alcoholPercentage;
    this._color = color;
  }

  getBeerInfo() {
    return `Hi, I'm ${this._name} and have an alcohol percentage of ${this._alcoholPercentage} and I have a ${this._color} color.`;
  }

  setName(name) {
    this._name = name;
  }

  setAlcoholPercentage(alcoholPercentage) {
    this._alcoholPercentage = alcoholPercentage;
  }

  setColor(color) {
    this._color = color;
  }

  getName() {
    return this._name;
  }

  getAlcoholPercentage() {
    return this._alcoholPercentage;
  }

  getColor() {
    return this._color;
  }
}

class Beer extends Beverage {
  constructor(name, alcoholPercentage, color, drinkType) {
    super(name, alcoholPercentage, color);
    this.drinkType = drinkType;
  }

  getBeerInfo() {
    return `This is a ${this.drinkType} beer. ${super.getBeerInfo()}`;
  }
}

const duvel = new Beer("Duvel", 8.5, "blond", "strong");

console.log(duvel.getName()); // Duvel
console.log(duvel.getAlcoholPercentage()); // 8.5
console.log(duvel.getColor()); // blond

duvel.setName("New Duvel");
duvel.setAlcoholPercentage(7.5);
duvel.setColor("light");

console.log(duvel.getName()); // New Duvel
console.log(duvel.getAlcoholPercentage()); // 7.5
console.log(duvel.getColor()); // light

console.log(duvel.getBeerInfo());
