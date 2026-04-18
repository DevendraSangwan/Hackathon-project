let display = document.getElementById("display");

// Function to add value
function appendValue(value) {
  display.value += value;
}

// Function to clear
function clearDisplay() {
  display.value = "";
}

//  Function for backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Event Handling
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "AC") {
      clearDisplay();
    } 
    else if (value === "C") {
      backspace();
    } 
    else if (value === "=") {
      calculate();
    } 
    else {
      appendValue(value);
    }
  });
});




//  Data processor

// Heading
const heading = document.createElement("h2");
heading.textContent = "Data Processor";
document.body.appendChild(heading);

// Input
const input = document.createElement("input");
input.placeholder = "Enter numbers (1,2,3)";
document.body.appendChild(input);

// Result
const result = document.createElement("p");


function getSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
function getMax(arr) {
  return Math.max(...arr);
}
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Convert input → array
function getArray() {
  return input.value.split(",").map(Number);
}

// Buttons
const sumBtn = document.createElement("button");
sumBtn.textContent = "Sum";

const maxBtn = document.createElement("button");
maxBtn.textContent = "Max";

const evenBtn = document.createElement("button");
evenBtn.textContent = "Even";

// Events
sumBtn.onclick = () => {
  result.textContent = "Sum: " + getSum(getArray());
};

maxBtn.onclick = () => {
  result.textContent = "Max: " + getMax(getArray());
};

evenBtn.onclick = () => {
  result.textContent = "Even: " + filterEven(getArray());
};

// Add buttons
document.body.appendChild(sumBtn);
document.body.appendChild(maxBtn);
document.body.appendChild(evenBtn);
document.body.appendChild(result);