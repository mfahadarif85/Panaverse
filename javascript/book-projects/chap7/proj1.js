class Employee {
  constructor(firstName, lastName, yearsWorked) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }
}

const person1 = new Employee("Zamin", "Abbas", 10);
const person2 = new Employee("Bilal", "Ahmed", 12);
const person3 = new Employee("Omer", "Ismail", 15);

const employees = [person1, person2, person3];

Employee.prototype.details = function () {
  console.log(
    `${this.firstName} ${this.lastName} has worked for ${this.yearsWorked} years`
  );
};

function getDetails(array) {
  return array.forEach((item) => item.details());
}

function addDetails(val1, val2, val3) {
  const person = new Employee(val1, val2, val3);
  employees.push(person);
  console.log(`New Employee added: ${person.firstName}`);
}

getDetails(employees);

addDetails("Mubashir", "Shah", 6);

getDetails(employees);
