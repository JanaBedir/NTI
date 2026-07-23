// 1
function test() {
  x = 10;
}
test();
console.log(x); // 10

// 2
function test2() {
  "use strict";
  try {
    a = 10;
  } catch (err) {
    console.log(err.message); // a is not defined
  }
}
test2();

// 3
function test3() {
  "use strict";
  var localVar = "test";
  try {
    // delete localVar;
  } catch (error) {
    console.log(error.message); // can't delete the whole object
  }

  let obj = {
    name: "Ali",
  };
  delete obj.name;
  console.log(obj); //empty object as we delete property
}
test3();

// 4
console.log(b); // undefined
var b = 10;
console.log(b); // 10

// 5
sayHi(); // Hi
function sayHi() {
  console.log("Hi");
}

// sayBye(); //TypeError : just var is hoisted but its value is undefined
var sayBye = function () {
  console.log("Bye");
};

// 6
// console.log(c); // ReferenceError because let exist in TDZ unti execution arrive to the line of its definition
let c = 5;

// 7
var n = 1;
function demo() {
  console.log(n);
  var n = 2;
  console.log(n);
}
demo(); //undefined 2
console.log(n); // 1

// 8
function test4() {
  if (true) var d = 10;
  console.log(d);
}
test4(); // 10

// 9
if (true) {
  let e = 10;
  const f = 20;
}
// console.log(e); //Error
// console.log(f); //Error

// 10
var g = 5;
var g = 10;
console.log(g); // 10

let h = 5;
// let h = 10;
console.log(h); // 5

// 11
const student = {
  name: "Jana",
  age: 20,
  city: "Cairo",
};
console.log(student);
student.age = 21;
console.log(student);
student.grade = "A";
console.log(student);
delete student.city;
console.log(student);
try {
  student = {
    name: "Ahmed",
  };
} catch (error) {
  console.log(error.message);
}

// 12
const nums = [1, 2, 3];
nums.push(4);
nums[0] = 100;
console.log(nums);
try {
  nums = [5, 6];
} catch (error) {
  console.log(error.message); // Not allowed to reassign const variable
}

// 13
var a13; // valid
let b13; // valid
// const c13; // not valid with const we should assign value to variable

// 14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1); // var global
console.log(window.g2); // undefined
console.log(window.g3); // undefined

// 15
const handlers15 = {};
for (let i = 0; i < 3; i++) {
  handlers15["fn" + i] = function () {
    return "index: " + i;
  };
}
console.log(handlers15.fn0()); // index: 0
console.log(handlers15.fn2()); // index: 1
//But if we write var instead so all functions see i=3

// 16
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Ali"));

// 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Jana", "Bedir", 20));

// 18
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

const sum = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};
console.log(sum(3, 4));

// 19
const product = {
  title: "Laptop",
  price: 15000,
  inStock: true,
  brand: "Dell",
};
const { title, price, inStock } = product;
console.log(title);
console.log(price);
console.log(inStock);

// 20
const courses = ["HTML", "CSS", "JS", "React"];
const [first, second] = courses;
console.log(first);
console.log(second);

// 21
function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}!`;
}
console.log(greet("Ali", "Welcome"));
console.log(greet("Ali"));
console.log(greet());

// 22
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// 23
let arr1 = [1, 2];
let arr2 = [3, 4, 5];
let merged = [...arr1, ...arr2];
console.log(merged);

let original = [10, 20, 30];
let copy = [...original];
copy.push(40);
console.log(original);
console.log(copy);

// 24
const user = {
  name: "Sara",
  age: 22,
};
const contact = {
  email: "sara@nti.com",
  age: 23,
};
const result = {
  ...user,
  ...contact,
};
console.log(result); // age 23 wins as it is the last value defined

// 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
  return a + b + c + d;
}
console.log(total(...values));

// 26
let person1 = {
  name: "Ali",
  child: {
    age: 5,
  },
};
let person2 = person1;
person2.name = "Omar";
console.log(person1.name); // Omar as it refer to the same object not new

// 27
const originalObj = {
  name: "Mona",
  details: {
    city: "Cairo",
  },
};
const copyObj = {
  ...originalObj,
};
copyObj.name = "Sara";
copyObj.details.city = "Alex";
console.log(originalObj);
console.log(copyObj); //because details object is tha same at two objects

// 28
const deepCopy = structuredClone(originalObj);
deepCopy.details.city = "Mina";
console.log(originalObj);
console.log(deepCopy);

// 29
const userData = {
  name: "Ahmed",
  age: 26,
  city: "Alex",
};
localStorage.setItem("userdata", JSON.stringify(userData));
const data = JSON.parse(localStorage.getItem("userdata"));
console.log(typeof data);
console.log(data);
localStorage.removeItem("userdata");

// 30
const APP_CONFIG = {
  name: "My App",
  version: "1.0",
  api: {
    baseUrl: "https://api.test.com",
    timeout: 5000,
  },
  features: [],
};
APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("Dark Mode");
console.log(APP_CONFIG);
try {
  APP_CONFIG = {};
} catch (error) {
  console.log(error.message);
}

// 31
function createCard(title, price = 0, ...tags) {
  return {
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`,
  };
}
let card1 = createCard("Laptop", 15000, "Dell", "16GB");
let card2 = createCard("Mouse");
console.log(card1);
console.log(card2);

// 32
const students = [
  {
    name: "Omar",
    grade: 80,
  },
  {
    name: "Mona",
    grade: 90,
  },
  {
    name: "Ali",
    grade: 70,
  },
];
students.forEach((el) => console.log(`${el.name} scored ${el.grade}`));
