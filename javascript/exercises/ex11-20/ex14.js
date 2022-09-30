/* Guest List: 
If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
  Then use your list to print a message to each person, inviting them to dinner. */

let guests = ["Muhammad Ali Jinnah", "Dr. Muhammad Iqbal", "Syed Ahmed Khan"];
guests.forEach((guest) => {
  console.log(
    `Dear Mr.${guest}, you are cordially invited to dinner on 30th September at my home. RSVP: Muhammad Fahad`
  );
});
