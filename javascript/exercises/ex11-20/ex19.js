// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guests = ["Muhammad Ali Jinnah", "Dr.Muhammad Iqbal", "Syed Ahmed Khan"];
console.log(`\n-----Invite List----\n`);
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(`Total Guests Invited: ${guests.length}`);

console.log(`\n----Situation Update----`);
console.log(
  `Unfortunately, Mr.${guests[2]} would not be able to join us for dinner.`
);
console.log(`\n-----New Invite List----\n`);
guests[2] = "Hakeem Muhammad Saeed";
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(`Total Guests Invited: ${guests.length}`);

console.log(`\n----Situation Update----`);
console.log(
  `We have just found a bigger dinner table, so now more space is available!`
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
console.log(`Total Guests Invited: ${guests.length}`);

console.log(`\n----Situation Update----`);
console.log(
  `Unfortunately, our bigger dinner table could not reach to us on time.`
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
console.log(`Total Guests Invited: ${guests.length}`);

console.log(`\n----Situation Update----`);
for (; guests.length > 0; ) {
  guests.pop();
}
console.log(`Empty List`);
console.log(guests);
console.log(`Total Guests Invited: ${guests.length}`);
