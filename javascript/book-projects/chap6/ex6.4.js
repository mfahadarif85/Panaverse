let values = [];

function calc(val1, val2, oper) {
  if (oper === "add") {
    return val1 + val2;
  } else if (oper === "subtract") {
    return val1 - val2;
  } else {
    return val1 + val2;
  }
}

for (let i = 0; i < 10; i++) {
  let val1 = 5 * i;
  let val2 = i * i;
  let res = calc(val1, val2, "add");
  values.push(res);
}

console.log(values);
