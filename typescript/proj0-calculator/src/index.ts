import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([
  {
    name: "name",
    type: "string",
    message: "Enter your name:",
  },
  {
    name: "age",
    type: "number",
    message: "Enter your age:",
  },
]);

console.log(
  chalk.blue(
    `In Sha Allah, in ${60 - answers.age} years, ${
      answers.name
    } will be 60 years old!`
  )
);
