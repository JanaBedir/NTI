// 1
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White",
};
console.log(car);

// 2
console.log(car.brand);
console.log(car["year"]);

// 3
car.color = "black";
car.price = 500000;
console.log(car);

// 4
delete car.year;
console.log(car.year); // undefined

// 5
let student = {
  "student-name": "Sara",
  age: 20,
};
console.log(student["student-name"]);

// 6
let book = {
  title: "JavaScript",
  author: {
    firstName: "Jana",
    lastName: "Bedir",
  },
};
console.log(book.author.lastName);

// 7
let person = {
  name: "Ali",
  age: 25,
  city: "Cairo",
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));

// 8
let settings = {
  theme: "dark",
  lang: "en",
};
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(settings);

// 9
let cities = ["Cairo", "Alex", "Mansoura", "Giza", "Aswan"];

console.log(cities);
console.log(cities.length);

// 10
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);

// 11
cities.push("Luxor");
console.log(cities);
cities.unshift("Tanta");
console.log(cities);

// 12
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);

// 13
let skills = ["HTML", "CSS", "JS", "React"];
console.log(skills.indexOf("JS"));
console.log(skills.includes("Python"));

// 14
let items = ["pen", "book", "bag"];
items.forEach((item, index) => console.log(index, item));

// 15
let colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
  if (color === "blue") break;
  console.log(color);
}

// 16
let letters = ["A", "B", "C"];
letters.push("D");
letters.push("E");
letters.shift();
console.log(letters);
console.log(letters.length);

// 17
let fruits = ["apple", "banana", "cherry"];
let upper = fruits.map((fruit) => fruit.toUpperCase());
console.log(upper);
console.log(fruits);

// 18
let nums = [10, 55, 30, 80, 45, 90];
let result = nums.filter((num) => num > 50);
console.log(result);

// 19
let places = ["Cairo", "Giza", "Alex", "Aswan"];
console.log(places.find((city) => city.startsWith("A")));
console.log(places.findIndex((city) => city.startsWith("A")));

// 20
let arr = ["a", "b", "c", "d", "e"];
let copy = arr.slice(1, 4);
console.log(copy);
console.log(arr);

// 21
let words = ["one", "two", "three", "four", "five"];
let removed = words.splice(1, 2);
console.log(removed);
console.log(words);

// 22
let numbers = [40, 100, 1, 5, 25];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 23
let ages = [16, 21, 17, 19];
console.log(ages.some((age) => age >= 18));
console.log(ages.every((age) => age >= 18));

// 24
let values = [5, 10, 15, 20];
let total = values.reduce((acc, current) => acc + current, 0);
console.log(total);

// 25
let students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 },
];
for (let student of students) {
  console.log(student.name, student.grade);
}

// 26
let topStudents = students
  .filter((student) => student.grade >= 80)
  .map((student) => student.name);
console.log(topStudents);

// 27
let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 30 },
];
let totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

// 28
let tech = ["js", "html", "css", "js", "react", "js"];
let count = 0;
for (let item of tech) {
  if (item === "js") {
    count++;
  }
}
console.log(count);

// 29
let classroom = {
  teacher: "Eng Ahmed",
  students: ["Ali", "Sara", "Omar", "Mona"],
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

// 30
let products2 = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 },
];

let titles = products2.map((product) => product.title.toUpperCase());
console.log(titles);

let cheapProducts = products2.filter((product) => product.price < 30);
console.log(cheapProducts);

let totalPrices = products2.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrices);
