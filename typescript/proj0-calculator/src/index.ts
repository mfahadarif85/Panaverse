import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([
  {
    name: "firstNum",
    type: "number",
    message: "Enter First Number:",
  },
  {
    name: "secondNum",
    type: "number",
    message: "Enter second number :",
  },
  {
    name: "operator",
    type: "list",
    message: "Select an operation",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);

let result = 0;

switch (answers.operator) {
  case "Add":
    result = answers.firstNum + answers.secondNum;
    break;
  case "Subtract":
    result = answers.firstNum - answers.secondNum;
    break;
  case "Multipy":
    result = answers.firstNum * answers.secondNum;
    break;
  case "Divide":
    result = answers.firstNum / answers.secondNum;
    break;
}

console.log(result);
