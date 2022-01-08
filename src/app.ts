// testing
console.log("Hello TypeScript!");

//using arrow functions and implicit returns
const pizzas = { name: "Pepperoni", toppings: "pepperoni", crust: "cheesy" };

const mappedPizzas = () => pizzas.crust.toUpperCase();

console.log(mappedPizzas());

const pizza = {
  name: "Blazing Inferno",
  toppings: "Hot Peppers",
  getName: () =>
    `The pizza name is ${pizza.name}, its toppings are ${pizza.toppings} and the crust is ${pizzas.crust} `,
};

console.log(pizza.getName());

// default function parameters example
function multiply(a, b = 25) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));

//object literal improvements example testing with es6 example function
const pizza1 = {
  name: "Pepperoni",
  price: 15,
  getName() {
    return this.name;
  },
};

const toppings1 = ["pepperoni"];

//es5 example
// const order = {
//   pizza: pizza,
//   toppings: toppings,
// }

// es6 example
// const order = {pizza1, toppings1}

// console.log(order)

//using function example
function createOrder(
  _pizza: { name: string; price: number },
  _toppings: string[]
) {
  return { pizza1, toppings1 };
}

console.log(createOrder(pizza1, toppings1));

//rest parameters
function sumAll(message, ...arr) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll("Hello World!", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);

//arrays spread operator example
const toppings2 = ["bacon", "chilli"];

const newToppings = ["pepperoni"];

const allToppings = [...toppings2, ...newToppings];

console.log(toppings2); // result is the first array on its own
console.log(newToppings); // result is the second array on its own
console.log(allToppings); // result is the first and second array combined into one singular array.

//object spread operator example
//taking a copy of the pizza3 object and placing it into the order object
// taking a copy of order object and placing it into finalOrder object then print to console
const pizza3 = {
  name: "Pepperoni",
};

const toppings = ["pepperoni"];

//es5 example
// const order = Object.assign({}, pizza3, {toppings})

// console.log(order)

//es6 examples
const order = {
  ...pizza3,
  toppings,
};

const finalOrder = { ...order };

console.log(finalOrder);

//destructuring objects and arrays
// destructure object
const pizza4 = {
  name: "Pepperoni",
  toppings: ["pepperoni"],
};

function order1({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}

const { pizzaName } = order1(pizza4);

console.log(order1(pizza4));

//destructure array
const toppings3 = ["pepperoni", "bacon", "chilli"];

const [first, second, third] = toppings3;

console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}

logToppings(toppings3);

//Number types in type script
//declaring that returns will be in number data type.
//Useful for easy reading and showing to the team upon code review.
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza cost: ${cost}`);

//string types in type script
//declaring that returns will be in number data type.
//Useful for easy reading and showing to the team upon code review.
const coupon: string = "pizza25";

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);
