const word = "javascript";
function scramble(str) {
  let strLength = str.length;
  let scrambleWord = "";
  for (let i = 0; i < strLength; i++) {
    console.log(str.length);
    let index = Math.floor(Math.random() * str.length);
    let currentChar = str[index];
    scrambleWord += currentChar;
    console.log(scrambleWord);
    str = str.slice(0, index) + str.slice(index + 1);
    console.log(str);
  }
  return scrambleWord;
}
console.log(scramble(word));
