/*A basket contains the following items:

- Bananas (6 pieces, costing €1 each)
- Apples (3 pieces, costing €1.5 each)
- Bottles of wine (2 bottles, costing €10 each)

Without using classes, perform the following in your code:

1. Calculate the total price.
2. Calculate the tax amount (6% for fruits, 21% for wine).

Next, repeat the same tasks using classes. Observe and compare the style preferences, time needed to code, structural differences, and readability. From now on, unless stated otherwise, it's recommended to use classes.
*/
// Use Case #1
const basketItems = [
  {name: "Bananas", quantity: 6, price: 1},
  {name: "Apples", quantity: 3, price: 1.5},
  {name: "Bottles of wine", quantity: 2, price: 10},
];

// Without using classes
function calculateTotalPrice(items) {
  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });

  return totalPrice;
}

function calculateTax(items) {
  let fruitTax = 0;
  let wineTax = 0;

  items.forEach((item) => {
    const itemTax =
      item.quantity * item.price * (item.name.includes("wine") ? 0.21 : 0.06);
    if (item.name.includes("wine")) {
      wineTax += itemTax;
    } else {
      fruitTax += itemTax;
    }
  });

  return {fruitTax, wineTax};
}

// Calculate total price
const total = calculateTotalPrice(basketItems);
console.log(`Total Price: €${total.toFixed(2)}`);

// Calculate tax
const {fruitTax, wineTax} = calculateTax(basketItems);
console.log(`Fruit Tax: €${fruitTax.toFixed(2)}`);
console.log(`Wine Tax: €${wineTax.toFixed(2)}`);
