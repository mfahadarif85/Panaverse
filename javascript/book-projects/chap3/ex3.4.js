const myCar = {
  make: "Suzuki",
  model: "Cultus",
  year: 2014,
  taxPayed: true,
};
let prop = "color";
myCar[prop] = "White";
prop = "forSale";
myCar[prop] = true;
console.log(myCar.make, myCar.model);
console.log(myCar.forSale);
