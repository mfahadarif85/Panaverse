const arr1 = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

const arr2 = arr1.filter((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr2);
