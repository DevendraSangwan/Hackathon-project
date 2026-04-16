function getValidInput(message, validOptions) {
  let input;
  while (true) {
    input = prompt(message);
    // handle cancel
    if (input === null) {
      alert("Game cancelled ❌");
      return null;
    }
    input = input.toLowerCase().trim();
    if (validOptions.includes(input)) {
      return input;
    } else {
      alert("Invalid choice! Try again.");
    }
  }
}
function startGame() {
let name = prompt("Enter your name:");
let score = 0;
let health = 100;
alert("Welcome " + name + "! You are lost in a jungle 🌴");

// STEP 3
let choice1 = getValidInput(
  "Choose: food / explore / rest",
  ["food", "explore", "rest"]
);
if (!choice1) return;
if (choice1 === "food") {
  health += 20;
  score += 10;
  alert("You found food! Health +20 and Score +10");
} 
else if (choice1 === "explore") {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    alert("Snake attacked 🐍");
    health -= 30;
  } else if (random === 1) {
    alert("You found water 💧");
    health += 20;
  } else {
    alert("Nothing happened");
  }
} 
else if (choice1 === "rest") {
  health += 10;
  alert("You feel better after resting!");
}

// HEALTH CHECK
if (!checkHealth(health)) return;

// STEP 6
let choice2 = getValidInput(
  "River ahead: drink / ignore / follow",
  ["drink", "ignore", "follow"]
);

if (!choice2) return;
if (choice2 === "drink") {
  health += 20;
  alert("Fresh water! Health +20");
} 
else if (choice2 === "follow") {
  let luck = Math.random();
  if (luck > 0.5) {
    alert("You escaped! 🎉");
    alert("Final Score: " + score);
    return;
  } else {
    alert("No escape yet...");
  }
}

// HEALTH CHECK
if (!checkHealth(health)) return;

// STEP 8
let choice3 = prompt("Danger! run / hide / fight").toLowerCase();
if (choice3 === "run") {
  health -= 20;
  alert("You escaped but lost health");
} 
else if (choice3 === "hide") {
  score += 10;
  alert("You stayed safe");
} 
else if (choice3 === "fight") {
  let fight = Math.random();
  if (fight > 0.5) {
    alert("You won the fight 💪");
    score += 20;
  } else {
    alert("You got injured 😢");
    health -= 40;
  }
}

// FINAL CHECK
if (!checkHealth(health)) return;
alert("You survived the jungle 🌴");

// RESULT
alert(
  "Game Over!\n" +
  "Name: " + name + "\n" +
  "Score: " + score + "\n" +
  "Health: " + health
);

// REPLAY
let replay = prompt("Play again? yes / no").toLowerCase();
if (replay === "yes") {
  startGame();
} else {
  alert("Thanks for playing!");
}
}

// HEALTH FUNCTION
function checkHealth(health) {
  if (health <= 0) {
    alert("Game Over 💀");
    return false;
  }
  return true;
}

// START GAME
startGame();