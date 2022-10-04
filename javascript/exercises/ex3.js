// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let userName = "Muhammad Fahad ARIF";
function titleCased(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(
  userName.toLowerCase(),
  userName.toUpperCase(),
  titleCased(userName)
);
