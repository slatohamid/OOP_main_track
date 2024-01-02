/*A basket contains the following items:

- Bananas (6 pieces, costing €1 each)
- Apples (3 pieces, costing €1.5 each)
- Bottles of wine (2 bottles, costing €10 each)

Without using classes, perform the following in your code:

1. Calculate the total price.
2. Calculate the tax amount (6% for fruits, 21% for wine).

Next, repeat the same tasks using classes. Observe and compare the style preferences, time needed to code, structural differences, and readability. From now on, unless stated otherwise, it's recommended to use classes.
*/

// Use Case #2
const basketItems = [
  {name: "Bananas", quantity: 6, price: 1},
  {name: "Apples", quantity: 3, price: 1.5},
  {name: "Bottles of wine", quantity: 2, price: 10},
];

// Apply a 50% discount to every fruit
function applyFruitDiscount(items) {
  const discountPercentage = 0.5;

  items.forEach((item) => {
    if (!item.name.includes("wine")) {
      // Apply discount only to fruits, not wine
      item.price *= 1 - discountPercentage;
    }
  });
}

// Function to calculate total price after discount
function calculateTotalPrice(items) {
  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });

  return totalPrice;
}

// Apply 50% discount to fruits
applyFruitDiscount(basketItems);

// Calculate total price after discount
const discountedTotal = calculateTotalPrice(basketItems);
console.log(`Total Price After 50% Discount: €${discountedTotal.toFixed(2)}`);
