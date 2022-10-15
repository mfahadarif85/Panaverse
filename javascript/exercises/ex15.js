/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */
let guests = ["Muhammad Ali Jinnah", "Dr. Muhammad Iqbal", "Syed Ahmed Khan"];
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
console.log(
  `\nUnfortunately, Mr.${guests[2]} would not be able to join us for dinner.\n`
);
guests[2] = "Liaqat Ali Khan";
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
