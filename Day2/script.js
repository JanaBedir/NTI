/*******************************TASK ONE********************************/
let username = "Jana";
let password = "12345678";

if (username === "") alert("Username is required");
else if (password.length < 8) alert("Password must be at least 8 characters");
else {
  console.log("Username:", username);
  console.log("Password:", password);
}
