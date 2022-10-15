let maxValue = 10;
let trackVar = false;
let randNum = Math.floor(Math.random() * maxValue + 1);
console.log(randNum);
while (!trackVar) {
  let guess = Number(prompt(`Guess a number between 1 and ${maxValue}`));
  if (guess == randNum) {
    trackVar = true;
    console.log("You guessed it right!");
  } else if (guess < randNum) console.log("Your guess is lower");
  else console.log("your guess is higher");
}
