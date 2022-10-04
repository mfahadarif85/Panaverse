/* Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array.
   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

const magicians = ["David Copperfield", "Dr. Strange", "Wong"];

function show_magicians(arr) {
  arr.forEach((item) => console.log(item));
}

function make_great(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The Great ${arr[i]}`;
  }
}

const magiciansCopy = [...magicians];
make_great(magiciansCopy);
show_magicians(magiciansCopy);
show_magicians(magicians);
