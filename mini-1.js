function startApp() {
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let marks = Number(prompt("Enter your marks:"));

// VALIDATION
if (isNaN(age) || age>100 || isNaN(marks) || name=="" || marks>100) {
  alert("Invalid input!");
  return;
}

// FUNCTIONS
function getCategory(age) {
  return age < 18 ? "Child" : "Adult";
}
//Eligibility
function getEligibility(age){
    return age >= 18 ? "Yes! you are eligible to vote" : "Sorry child ! You are not eligible to vote."; 
}
//result
function getResult(marks) {
  return marks >= 50 ? "Pass" : "Fail";
}
//Grade
function getGrade(marks) { 
  if (marks >= 90) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 50) return "C";
  else return "F";
}
// CALCULATIONS
let category = getCategory(age);
let eligiblity=getEligibility(age);
let result=getResult(marks);
let grade = getGrade(marks);

// OUTPUT
alert(`
📄 Student Report

Name: ${name}
Age: ${age}
Marks: ${marks}

Category: ${category}
Eligiblity: ${eligiblity}
Result: ${result}
Grade: ${grade}
`);

// REPLAY
let replay = prompt("Check another student? yes/no");

if (replay.toLowerCase() === "yes") {
  startApp();
} else {
  alert("Done 👍");
}

}

startApp();