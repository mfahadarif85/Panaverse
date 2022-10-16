class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const friend1 = new Person("Zamin", "Abbas");
const friend2 = new Person("Bilal", "Ahmed");
console.log(friend1.fullName());
console.log(friend2.fullName());
