class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const friend1 = new Person("Zamin", "Abbas");
const friend2 = new Person("Bilal", "Ahmed");
console.log(`Hello ${friend1.firstName} ${friend1.lastName}`);
console.log(`Hello ${friend2.firstName} ${friend2.lastName}`);
