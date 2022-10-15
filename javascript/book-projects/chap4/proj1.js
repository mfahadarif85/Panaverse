let num = Number(prompt("Enter a number between 1 & 10:"));
let num2 = Math.floor(Math.random() * 10);
if (num2 > num) console.log(`Your input is greater than the value`);
else if (num2 < num) console.log(`Your input is less than the value`);
else if (num2 === num) console.log(`Your input is equal to the value`);
