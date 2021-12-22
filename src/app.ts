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
function multiply( a, b = 25) {
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
  console.log(message)
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello World!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);
