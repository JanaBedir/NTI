//1
let fullName = "Jana Mohamed";
console.log(fullName.length);

//2
let sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

//3
let email = "student@nti.com";
console.log(email.includes("@"));

//4
let word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);

//5
let text = "This is a bad day";
console.log(text.replace("bad", "good"));

//6
let sentence2 = "I love coding";
let words = sentence2.split(" ");
console.log(words.join("-"));

//7
let text2 = " nti egypt training ";
let result = text2.trim().toUpperCase().replace("EGYPT", "CAIRO");
console.log(result);

//8
let num = +"45.8";
console.log(num);

//9
let n = 7.6;
console.log(Math.round(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));

//10
console.log(`Max numer: ${Math.max(12, 5, 28, 9)}`);
console.log(`Min numer: ${Math.min(12, 5, 28, 9)}`);

//11
let random1 = Math.floor(Math.random() * 20) + 1;
console.log(random1);

//12
let price = 19.4567;
console.log(price.toFixed(2));

//13
let numbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 50) + 1;
  numbers.push(random);
  sum += random;
}

console.log(numbers);
console.log("Largest:", Math.max(...numbers));
console.log("Smallest:", Math.min(...numbers));
console.log("Average:", (sum / numbers.length).toFixed(2));

// 14
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 15
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

// 16
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

// 17
let names = ["Sara", "Omar", "Mona", "Youssef"];

for (let name of names) {
  console.log(name);
}

// 18
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

// 19
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 20
for (let i = 1; i <= 30; i++) {
  if (i === 25) {
    break;
  }

  if (i % 3 === 0) {
    continue;
  }

  console.log(i);
}

// 21
let hello = "HELLO";

for (let letter of hello) {
  console.log(letter);
}

// 22
let arr = [10, 20, 30, 40];
let total = 0;

for (let num1 of arr) {
  total += num1;
}

console.log(total);

// 23
let sentence3 = "JavaScript is amazing and awesome";
let counter = 0;

for (let ch of sentence3) {
  if (ch === "a" || ch === "A") {
    counter++;
  }
}
console.log(counter);

// 24
let grades = [70, 85, 92, 60, 77, 88];

for (let grade of grades) {
  if (grade % 2 === 0) {
    console.log(grade);
  }
}

// 25
for (let i = 1; i <= 4; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }

  console.log(stars);
}

// 26
let students = ["ahmed", "sara", "omar", "laila", "hassan"];
let matched = 0;

for (let student of students) {
  let upper = student.toUpperCase();

  if (upper.startsWith("A") || upper.startsWith("S")) {
    console.log(upper);
    matched++;
  }
}

console.log("Matched:", matched);
