/* Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified. */

const magicians = ["David Copperfield", "Dr. Strange", "Wong"];

function show_magicians(arr) {
  arr.forEach((item) => console.log(item));
}

function make_great(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The Great ${arr[i]}`;
  }
}

show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
