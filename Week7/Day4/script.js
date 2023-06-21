// const username = "Ivan";
// const isLoggedIn = true;

// if (username === "Ivan" && isLoggedIn) {
//   document.body.firstElementChild.textContent = "Hello, " + username;
// }

// const color = prompt("Enter color");
// const title = document.body.firstElementChild;
// title.style.backgroundColor = color;

// const fruits = ["apple", "banana", "orange"];

// const username = "Ivan";

// const container = document.body.firstElementChild;

// const paragraph = document.createElement("p");

// const content = document.createTextNode("Hello, " + username);

// paragraph.appendChild(content);

// container.appendChild(paragraph);

// const fruits = ["apple", "banana", "orange"];

// const container = document.getElementById("all-fruits");

// for (let fruit of fruits) {
//   const newLi = document.createElement("li");
//   const text = document.createTextNode(fruit);
//   newLi.appendChild(text);
//   container.appendChild(newLi);
// }

// const fruits = ["melon", "pear", "apple"];

// // i want to create 1 li per fruit and add it to the ul

// //1. retrieve the ul
// const container = document.getElementById("all_fruits");

// for (let fruit of fruits) {
//     //2. create the li
//     const newLi = document.createElement("li");

//     newLi.classList.add("ocean");
//     //3. create the text
//     const text = document.createTextNode(fruit);
//     //4. append the text to the li
//     newLi.appendChild(text);
//     //5. append the li to the ul
//     container.appendChild(newLi);
// }

// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

// console.log(document.body.firstElementChild);
// console.log(document.body.children[0]);

// // 2. The ul DOM node?

// console.log(document.body.children[1]);
// console.log(document.body.lastElementChild.previousElementSibling);
// // 3. The second li (with Pete)?

// console.log(document.body.children[1].children[1]);
// console.log(document.body.children[1].lastElementChild);

// const allLi = document.getElementsByTagName("li");

// const myDiv = document.getElementById("container");


const allParagraphs = document.querySelectorAll("#container p");