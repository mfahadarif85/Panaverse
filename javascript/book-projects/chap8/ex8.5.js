let str = "I love JavaScript";
str = str.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((letter, index) => (str = str.replaceAll(letter, index)));
console.log(str);
