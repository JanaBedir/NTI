let userName = prompt("Enter your name:");
let birthYear = +prompt("Enter your birth year:");
let isStudent = confirm("Are you a student?");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let category = "";
if (age < 13) category = "Kid";
else if (age >= 13 && age <= 17) category = "Teen";
else if (age >= 18 && age <= 59) category = "Adult";
else category = "Senior";

let message = "";
if (isStudent) message = "Don't forget to study hard!";
else message = "Have a great day!";

let result = `Hello ${userName}, you are ${age} years old.
Category: ${category}.
${message}`;

console.log(result);
alert(result);

document.getElementById("name").innerText = userName;
document.getElementById("age").innerText = age;
document.getElementById("category").innerText = category;
document.getElementById("message").innerText = message;
