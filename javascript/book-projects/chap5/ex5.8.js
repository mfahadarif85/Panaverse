let output = "";
let numSkip = 4;
for (let i = 1; i <= 10; i++) {
  if (i === numSkip) {
    continue;
  }
  output += i;
}
console.log(output);

// Alternatively
let output2 = "";
let numSkip2 = 4;
for (let i = 1; i <= 10; i++) {
  if (i === numSkip2) {
    break;
  }
  output2 += i;
}
console.log(output2);
