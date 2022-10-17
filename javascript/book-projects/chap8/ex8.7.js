const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const mydate = `${months[month]} ${day}, ${year}`;
console.log(mydate);
