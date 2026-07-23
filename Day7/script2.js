// 1
const fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
  console.log(index, fruits[index]);
}
for (let fruit of fruits) {
  console.log(fruit);
}

// 2
const fruits2 = ["apple", "banana", "cherry"];

for (let [index, value] of fruits2.entries()) {
  console.log(`${index} → ${value}`);
}

// 3
const word = "NTI";
for (let index in word) {
  console.log(index, word[index]);
}
for (let letter of word) {
  console.log(letter);
}

// 4
const user = {
  name: "Ali",
  age: 25,
};
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// 5
const numbers = [1, 2, 3, 4, 5, 6];
for (let num of numbers) {
  if (num === 3) continue;
  if (num === 5) break;
  console.log(num); // 1 2 4
}

// 6
let map = new Map();
let obj = { id: 1 };
map.set("name", "Ahmed");
map.set(100, "ID");
map.set(obj, "UserObject");
console.log(typeof map);
console.log(map.size);

// 7
console.log(map.get("name"));
console.log(map.has("age"));
map.delete(100);
console.log(map.size);

// 8
for (let [key, value] of map) {
  console.log(key, value);
}
for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value);
}

// 9
// A Map can use any data type as a key such as objects, arrays, numbers and functions. Also, map has a built-in size property, making it easy to know the number of entries.

// 10
map.clear();
console.log(map.size);

// 11
let set = new Set();
set.add(10);
set.add(21);
set.add(2);
set.add(3);
set.add(2);
set.add(10);
console.log(set);
console.log(set.size); //Set stores only unique values so duplicate values are ignored.

// 12
console.log(set.has(2));
set.delete(3);
console.log(set.has(3));

// 13
for (let value of set.values()) {
  console.log(value);
}
for (let entry of set.entries()) {
  console.log(entry); // In Set, the key and value are the same.
}

// 14
const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log(unique);

// 15
// A Set stores only unique values while an Array allows duplicates.
// A Set has add() while an Array has push().
// A Set has no indexes while an Array uses indexes.

// 16
const name = "Ahmed";
const age = 25;
const oldObject = {
  name: name,
  age: age,
};
const newObject = {
  name,
  age,
};
console.log(oldObject);
console.log(newObject);

// 17
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};
console.log(calculator.add(5, 3));
console.log(calculator.multiply(5, 3));

// 18
const key1 = "email";
const key2 = "phone";
const userr = {
  [key1]: "user@gmail.com",
  [key2]: "01000000000",
  ["user_" + 99]: "special user",
};
console.log(userr);

// 19
function buildPayload(type, value) {
  return {
    type,
    value,
    createdAt: new Date().toISOString(),
    print() {
      console.log(`${type}: ${value}`);
    },
    [type + "_flag"]: true,
  };
}
const order = buildPayload("order", 12345);
console.log(order);
order.print();

// 20
let a = 10;
let b = a;
b++;
console.log(a, b); // 10 11
// Numbers are primitive values so b gets a copy value of a.

// 21
const person1 = {
  name: "SSS",
  child: {
    age: 5,
  },
};
const person2 = person1;
person2.name = "AAA";
console.log(person1.name); // AAA because person2 is a reference to the same object so changing person2.name also changes person1.name.

// 22
const original = {
  x: 1,
  nested: {
    y: 2,
  },
};
const copy = {
  ...original,
};
copy.x = 100;
copy.nested.y = 50;
console.log(original);
console.log(copy);
// x is copied by value but nested is copied by reference because spread creates a shallow copy.

// 23
const original23 = {
  x: 1,
  nested: {
    y: 2,
  },
};
const copy23 = Object.assign({}, original23);
copy23.nested.y = 100;
console.log(original23);
console.log(copy23);
// Yes the original object also changes because it also creates a shallow copy.

// 24
const deepSrc = {
  n: 1,
  d: new Date(),
  arr: [1, { k: 2 }],
  set: new Set([1, 2, 3]),
};
const deepClone = structuredClone(deepSrc);
deepClone.arr[1].k = 999;
console.log(deepSrc);
console.log(deepClone);

// 25
const arr1 = [1, [2, 3]];
const arr3 = [...arr1];
arr1[1][0] = 99;
console.log(arr3[1][0]); //Spread makes only a shallow copy

const arr4 = structuredClone(arr1);
arr1[1][0] = 55;
console.log(arr1);
console.log(arr4);

// 26
const m1 = new Map([["k", { v: 1 }]]);
const m2 = new Map(m1);
m2.get("k").v = 42;
console.log(m1.get("k").v); //shallow copy

// 27
const m3 = structuredClone(m1);
m3.get("k").v = 7;
console.log(m1.get("k").v);
console.log(m3.get("k").v);

// 28
const ids = [101, 102, 101, 103, 102, 104];
const uniqueIds = new Set(ids);
const map2 = new Map();
for (let id of uniqueIds) {
  map2.set(id, "available");
}
console.log(map2.size);
for (let [key, value] of map2) {
  console.log(key, value);
}
// 29
const title = "JavaScript";
const hours = 71;
const key = "level";
const course = {
  title,
  hours,
  info() {
    console.log(`${this.title} - ${this.hours}`);
  },
  [key]: "Beginner",
};
for (let [key, value] of Object.entries(course)) {
  console.log(key, value);
}

// 30
let personA = {
  name: "SSSSSSS",
  son: {
    age: 5,
  },
};
let personB = personA;
personB.name = "Ahmed";
let personC = structuredClone(personA);
personC.son.age = 10;
console.log(personA);
console.log(personB);
console.log(personC);
