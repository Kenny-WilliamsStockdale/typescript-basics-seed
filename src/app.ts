console.log("Hello TypeScript!");

const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: "Blazing Inferno",
  getName: function () {
    console.log(this.name);
  },
};

console.log(pizza.getName());
