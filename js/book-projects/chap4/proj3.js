let gameData = ["rock", "paper", "scissors"];
let playerRandom = Math.floor(Math.random() * 3);
let cpuRandom = Math.floor(Math.random() * 3);
let playerSelect = gameData[playerRandom];
let cpuSelect = gameData[cpuRandom];
console.log(`Player Selected: ${playerSelect}`);
console.log(`CPU Selected: ${cpuSelect}`);
if (playerSelect === "rock" && cpuSelect === "scissors")
  console.log("Player Wins!");
else if (playerSelect === "paper" && cpuSelect === "rock")
  console.log("Player Wins!");
else if (playerSelect === "scissors" && cpuSelect === "paper")
  console.log("Player Wins!");
else if (playerSelect === cpuSelect) console.log("Draw!");
else console.log("CPU Wins!");
