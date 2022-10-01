/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let guests = ["Muhammad Ali Jinnah", "Dr.Muhammad Iqbal", "Syed Ahmed Khan"];
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(
  `\nUnfortunately, Mr.${guests[2]} would not be able to join us for dinner.\n`
);
guests[2] = "Hakeem Muhammad Saeed";
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(
  `\nWe have just found a bigger dinner table, so now more space is available!\n`
);
guests.unshift("Syed Ahmed Khan");
guests.push("Dr Abdul Qadeer Khan");
guests.splice(3, 0, "Abdus Sattar Edhi");
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
