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