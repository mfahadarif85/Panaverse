class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.species} ${this.sound}`);
  }
}

let cat = new Animal("cat", "meoww");
let dog = new Animal("dog", "woof");

Animal.prototype.eat = function () {
  console.log(`${this.species} eats`);
};

Animal.prototype.food = this.food;

cat.makeSound();
dog.makeSound();
cat.eat();
console.log(cat);
console.log(Animal);
cat.food = "catfood";
console.log(cat.food);
console.log(dog.food);
dog.food = "dogfood";
console.log(dog.food);
