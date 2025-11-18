console.log("Welcome to the Treasure Hunt Adventure!");
let playerName = prompt("Enter your name:");
let coins = 5;
let health = 3;
let score = 0;
let hasKey = false;
let room = 1;
let alive = true;

console.log("Starting the journey,", playerName);

while (room <= 6 && alive) {
console.log("You enter Room", room);

if (room === 1) {
console.log("A trap triggers! Lose 1 health.");
health -= 1;
score -= 5;
if (health <= 0) alive = false;
}

else if (room === 2) {
console.log("A treasure chest! You gain 10 coins.");
coins += 10;
score += 10;
}

else if (room === 3) {
console.log("A merchant offers a key for 8 coins.");
let buy = prompt("Buy key? yes/no");
if (buy === "yes" && coins >= 8) {
coins -= 8;
hasKey = true;
score += 5;
console.log("You bought the key.");
} else {
console.log("You skip the key.");
}
}

else if (room === 4) {
console.log("Puzzle room! Guess a number 1-2.");
let guess = Number(prompt("Enter guess:"));
if (guess === 2) {
console.log("Puzzle solved! Bonus +15 score.");
score += 15;
coins += 5;
} else {
console.log("Wrong answer. Lose 1 health.");
health -= 1;
if (health <= 0) alive = false;
}
}

else if (room === 5) {
console.log("Locked door.");
if (hasKey) {
console.log("You open it using your key.");
hasKey = false;
score += 10;
} else {
console.log("No key! You injure yourself.");
health -= 1;
if (health <= 0) alive = false;
}
}

else if (room === 6) {
console.log("Final Guardian Room.");
if (score >= 30 && coins >= 10) {
console.log("Guardian lets you pass.");
score += 20;
} else {
console.log("Guardian attacks!");
health -= 2;
if (health <= 0) alive = false;
}
}

console.log("Stats -> Coins:", coins, "Health:", health, "Score:", score, "Key:", hasKey);
room += 1;
}

console.log("Treasure Hunt — Game Summary");
console.log("Player Name:", playerName);
console.log("Final Coins:", coins);
console.log("Final Health:", health);
console.log("Final Score:", score);
console.log("Has Key:", hasKey);

let status = "LOSE";
if (alive && score >= 40) status = "WIN";

console.log("Status:", status);
