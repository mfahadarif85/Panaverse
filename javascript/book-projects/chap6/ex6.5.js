let val = "1000";
(function () {
  let val = "100";
  console.log(val);
})();

let result = (function () {
  let val = "10";
  return val;
})();

console.log(result);
console.log(val);

(function (val) {
  console.log(`The value is ${val}`);
})("one thousand");
