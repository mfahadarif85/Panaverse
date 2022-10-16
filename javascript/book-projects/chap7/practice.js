class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hi there ${this.firstName} ${this.lastName}`);
  }
}

const friend1 = new Person("Zamin", "Abbas");
friend1.greet();
