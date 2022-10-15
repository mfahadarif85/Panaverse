let inventory = [];
let item1 = {
  name: "shirt",
  model: "formal",
  cost: 2000,
  quantity: 10,
};
let item2 = {
  name: "pant",
  model: "denim",
  cost: 5000,
  quantity: 5,
};
let item3 = {
  name: "coat",
  model: "formal",
  cost: 10000,
  quantity: 1,
};
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].quantity);
console.log(inventory[1].model);
