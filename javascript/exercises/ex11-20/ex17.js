/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */

let guests = ["Muhammad Ali Jinnah", "Dr.Muhammad Iqbal", "Syed Ahmed Khan"];
console.log(`-----Invite List----\n`);
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(`\n----Situation Update----`);
console.log(
  `Unfortunately, Mr.${guests[2]} would not be able to join us for dinner.\n`
);
console.log(`\n-----New Invite List----\n`);
guests[2] = "Hakeem Muhammad Saeed";
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(`\n----Situation Update----`);
console.log(
  `We have just found a bigger dinner table, so now more space is available!\n`
);
console.log(`\n-----New Invite List----\n`);
guests.unshift("Syed Ahmed Khan");
guests.push("Dr Abdul Qadeer Khan");
guests.splice(3, 0, "Abdus Sattar Edhi");
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(`\n----Situation Update----`);
console.log(
  `Unfortunately, our bigger dinner table could not reach to us on time.\n`
);

for (; guests.length > 2; ) {
  console.log(
    `Dear Mr.${
      guests[guests.length - 1]
    }, unfortunately, due to lack of space, we cannot accomdate you to our dinner.`
  );
  guests.pop();
}
console.log(`\n-----New Invite List----\n`);
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
for (; guests.length > 0; ) {
  guests.pop();
}
console.log(`\n----Situation Update----`);
console.log(`Empty List`);
console.log(guests);
