// Task 1
// 1
function multiply(num1, num2) {
  return num1 * num2;
}
// 2
function calculate(num1, num2, operation) {
  let result = operation(num1, num2);
  displayResult(result);
}
// 3
function displayResult(result) {
  console.log(`Result: ${result}`);
}
// 4
calculate(5, 4, multiply);

// Task 2
// 1
function greetUser() {
  console.log("Hello, User!");
}
setTimeout(greetUser, 3000);

// 2
let count = 10;
let interval = setInterval(function () {
  console.log(count);
  count--;

  if (count === 0) {
    console.log("Time's up!");
    clearInterval(interval);
  }
}, 1000);

// 3
let count = 10;
let interval = setInterval(function () {
  console.log(count);
  count--;
}, 1000);

setTimeout(function () {
  clearInterval(interval);
  console.log("Countdown stopped!");
}, 5000);

// 4
let timeout = setTimeout(function () {
  console.log("This will be cleared!");
}, 5000);

clearTimeout(timeout);

console.log("Timeout has been cancelled.");

// Another Task
let items = [];

function addItem(item) {
  items.push(item);
}

function displayItems() {
  console.log("Items:");
  items.forEach((item, index) => console.log(index + ": " + item));
}

function updateItem(index, newItem) {
  if (index >= 0 && index < items.length) items[index] = newItem;
  else console.log("Invalid index");
}

function deleteItem(index) {
  if (index >= 0 && index < items.length) items.splice(index, 1);
  else console.log("Invalid index");
}
