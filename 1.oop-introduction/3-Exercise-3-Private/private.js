class Beer {
  #name;
  #alcoholPercentage;
  #color;

  constructor(name, alcoholPercentage, color) {
    this.#name = name;
    this.#alcoholPercentage = alcoholPercentage;
    this.#color = color;
  }

  getBeerInfo() {
    return `Hi, I'm ${this.#name} and have an alcohol percentage of ${
      this.#alcoholPercentage
    } and I have a ${this.#color} color.`;
  }

  setName(name) {
    this.#name = name;
  }

  setAlcoholPercentage(alcoholPercentage) {
    this.#alcoholPercentage = alcoholPercentage;
  }

  setColor(color) {
    this.#color = color;
  }

  getName() {
    return this.#name;
  }

  getAlcoholPercentage() {
    return this.#alcoholPercentage;
  }

  getColor() {
    return this.#color;
  }
}

const duvel = new Beer("Duvel", 8.5, "blond");

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
