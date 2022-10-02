/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let userNames = ["admin", "fahad"];
if (!(userNames.length < 1)) {
  userNames.forEach((user) => {
    if (user == "admin") {
      console.log("Hello Admin, would like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for loggin in again.`);
    }
  });
} else {
  console.log("We need to find some users! ");
}
