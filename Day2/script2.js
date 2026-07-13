let name = prompt("Enter employee name:");
let age = +prompt("Enter employee age:");
let experience = +prompt("Enter years of experience:");
let rating = +prompt("Enter your self-rating (1-10):");
let baseSalary = Number(prompt("Enter base salary:"));

let category;
if (experience < 2) category = "Junior";
else if (experience >= 2 && experience <= 5) category = "Mid-Level";
else if (experience > 5 && experience <= 10) category = "Senior";
else category = "Expert";

let performance;
switch (rating) {
  case 9:
  case 10:
    performance = "Excellent";
    break;

  case 7:
  case 8:
    performance = "Good";
    break;

  case 5:
  case 6:
    performance = "Average";
    break;

  default:
    performance = "Needs Improvement";
}

let bonus = 0;
if (experience >= 0 && experience <= 2) bonus = baseSalary * 0.1;
else if (experience >= 3 && experience <= 5) bonus = baseSalary * 0.15;
else bonus = baseSalary * 0.2;
let finalSalary = baseSalary + bonus;

let currentHour = new Date().getHours();
let shift;

if (currentHour >= 9 && currentHour < 18) {
  shift = "Day Shift";
} else {
  shift = "Night Shift";
}

let report = `
Employee Report

Name: ${name}
Age: ${age}
Experience: ${experience} years
Job Category: ${category}
Self Rating: ${rating}
Performance: ${performance}
Base Salary: ${baseSalary}
Bonus: ${bonus}
Final Salary: ${finalSalary}
Current Shift: ${shift}
`;
console.log(report);
alert(report);

document.getElementById("name").textContent = name;
document.getElementById("age").textContent = age;
document.getElementById("experience").textContent = experience;
document.getElementById("category").textContent = category;
document.getElementById("rating").textContent = rating;
document.getElementById("performance").textContent = performance;
document.getElementById("baseSalary").textContent = baseSalary;
document.getElementById("bonus").textContent = bonus;
document.getElementById("finalSalary").textContent = finalSalary;
document.getElementById("shift").textContent = shift;
