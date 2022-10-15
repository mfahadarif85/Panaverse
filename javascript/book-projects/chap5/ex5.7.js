let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
};

for (let key in car) {
  console.log(key, car[key]);
}
let arr = ["Golf", "Volkswagen", 1999];
for (let item in arr) {
  console.log(arr[item]);
}
