/* Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

const magicians = ["David Copperfield", "Dr. Strange", "Wong"];

function show_magicians(arr) {
  arr.forEach((item) => console.log(item));
}

show_magicians(magicians);
