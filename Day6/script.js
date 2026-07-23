let users = [];

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let graduated = document.getElementById("graduated");

let addBtn = document.getElementById("addBtn");
let tbody = document.getElementById("tbody");
let search = document.getElementById("search");
let filter = document.getElementById("filter");

let currentIndex = -1;

// Add & Update
addBtn.onclick = function () {
  if (fname.value == "" || lname.value == "" || age.value == "") {
    alert("Please fill all fields");
    return;
  }

  let user = {
    fname: fname.value,
    lname: lname.value,
    age: age.value,
    graduated: graduated.checked,
  };

  if (currentIndex == -1) {
    users.push(user);
  } else {
    users[currentIndex] = user;
    currentIndex = -1;
    addBtn.innerHTML = "Add User";
  }

  clearInputs();
  displayUsers(users);
};

// Display
function displayUsers(arr) {
  let table = "";

  for (let i = 0; i < arr.length; i++) {
    table += `
        <tr>

            <td>${arr[i].fname}</td>
            <td>${arr[i].lname}</td>
            <td>${arr[i].age}</td>
            <td>${arr[i].graduated ? "Yes" : "No"}</td>

            <td>

                <button onclick="editUser(${users.indexOf(arr[i])})">
                Update
                </button>

                <button onclick="deleteUser(${users.indexOf(arr[i])})">
                Delete
                </button>

            </td>

        </tr>
        `;
  }

  tbody.innerHTML = table;
}

// Delete
function deleteUser(index) {
  users.splice(index, 1);

  displayUsers(users);
}

// Edit
function editUser(index) {
  fname.value = users[index].fname;
  lname.value = users[index].lname;
  age.value = users[index].age;
  graduated.checked = users[index].graduated;

  currentIndex = index;

  addBtn.innerHTML = "Update User";
}

// Clear
function clearInputs() {
  fname.value = "";
  lname.value = "";
  age.value = "";
  graduated.checked = false;
}

// Search
search.onkeyup = function () {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].fname.toLowerCase().includes(search.value.toLowerCase())) {
      result.push(users[i]);
    }
  }

  displayUsers(result);
};

// Filter
filter.onchange = function () {
  if (filter.value == "all") {
    displayUsers(users);
  } else if (filter.value == "graduated") {
    let result = users.filter(function (user) {
      return user.graduated == true;
    });

    displayUsers(result);
  } else {
    let result = users.filter(function (user) {
      return user.graduated == false;
    });

    displayUsers(result);
  }
};
