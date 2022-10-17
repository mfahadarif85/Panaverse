let str = "thIs wiLl be capiTalized for eaCh wOrd";
function wordCaps(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(wordCaps(str));

/* 
Book Solution
const val = "thIs will be capiTalized for each word";
function wordsCaps(str) {
  str = str.toLowerCase();
  const tempArr = [];
  let words = str.split(" ");
  words.forEach((word) => {
    let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
    tempArr.push(temp);
  });
  return tempArr.join(" ");
}
console.log(wordsCaps(val)); */
