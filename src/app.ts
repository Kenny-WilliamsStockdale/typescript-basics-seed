console.log("Hello TypeScript!");

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
