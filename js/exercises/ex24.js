/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

console.log(`"Horse == "Horse"`, "Horse" == "Horse");
console.log(`"Horse == "horse"`, "Horse" == "horse");

console.log(`"horse" != "Horse"`, "horse" != "Horse");
console.log(`"horse" != "horse"`, "horse" != "horse");

console.log(
  `"horse" == "HORSE".toLowerCase()`,
  "horse" == "HORSE".toLowerCase()
);
console.log(
  `"HORSE" == "HORSE".toLowerCase()`,
  "HORSE" == "HORSE".toLowerCase()
);

console.log(`2 == 2`, 2 == 2);
console.log(`5 != 2`, 5 != 2);
console.log(`2 < 5`, 2 < 5);
console.log(`5 > 2`, 5 > 2);
console.log(`3 >= 2`, 3 >= 2);
console.log(`3 <= 3`, 3 <= 3);
console.log(`2 == 1`, 2 == 1);
console.log(`5 != 5`, 5 != 5);
console.log(`5 < 2)`, 5 < 2);
console.log(`2 > 5`, 2 > 5);
console.log(`2 >= 3`, 2 >= 3);
console.log(`4 <= 3`, 4 <= 3);

console.log(`true && true`, true && true);
console.log(`true && false`, true && false);
console.log(`true || true`, true || true);
console.log(`true || false`, true || false);
console.log(`false || false`, false || false);

let arr = ["a", 1, "b", 2];
console.log(
  `Does the array ["a", 1, "b", 2] contains "a"? `,
  arr.includes("a")
);
console.log(`Does the array ["a", 1, "b", 2] contains 1? `, arr.includes(1));
console.log(
  `Does the array ["a", 1, "b", 2] contains "c"? `,
  arr.includes("c")
);
console.log(`Does the array ["a", 1, "b", 2] contains 3? `, arr.includes(3));
