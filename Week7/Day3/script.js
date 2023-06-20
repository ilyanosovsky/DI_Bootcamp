// // console.log("Hello from script.js");

// let myName = "Sara";

// let computer; // declaring a variable
// computer = "MacBook Pro"; // assigning a value to a variable

// const myAge = 30; // declaring and assigning a value to a variable

// const myName = "Sara";
// console.log(myName[0]);
// console.log(myName.length);

// "Hello World".toUpperCase();

// console.log(myName.toUpperCase());

// let string = "Hello World";
// console.log(string.slice(0, 5));

// let string2 = "Hello World in a beautiful day";
// console.log(string2.substring(0, 5));

// const full = `${string} is ${string2} years old`;

// console.log(full);

// const names = ["Sara", ["John", "Bob"], "Alex", "Mary"];
// console.log(names[1][1]);

// names.push("Sara"); // adds an element to the end of the array
// console.log(names);

// names.pop(); // removes the last element
// console.log(names);

// names.splice(1, 0, 'Ivan'); // adds an element at index 1
// console.log(names);


// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

// 2. Display dog

// 3. Add to the array pets, the pet horse. Remove the pet rabbit

// 4. Display the array length

// let pets = ['cat','dog','fish','rabbit','cow'];
// console.log(pets[1]);
// pets.push('horse');
// pets.splice(3, 1);
// console.log(pets.length);
// console.log(pets);

// const age = 18;

// if (age >= 18) {
//     console.log("You can drive");
// } else {
//     console.log("You cannot drive");
// }

// const color = "red";
// const num = 10;

// if (color === "red" && num > 10) {
//     console.log("The color is red and the number is greater than 10");
// } else if (color === "red" && num < 10) {
//     console.log("The color is red and the number is less than 10");
// } else if (color === "blue") {
//     console.log("The color is blue");
// } else if (color === "green" || num > 12) {
//     console.log("The color is green");
// } else {
//     console.log("The color is not red, blue or green");
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const colors = ["red", "blue", "green", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//     const sentence = `My ${i+1} color is ${colors[i]}`;
//     console.log(sentence);
// }

// const family = {
//     mom: "Sara",
//     dad: "John",
//     son: "Bob"
// }


// const mm = family["mom"];
// console.log(mm);

// const question = prompt("What is mom's name?");

// const answer = family[question];

// console.log(answer);

// const family = {
//     lastname : "Smith",
//     pet : "dog",
//     members : 4
// }

// for (let key in family) {
//     console.log(key); // key
//     console.log(family[key]); // value
// }

// const arr = ['we', 'are', 'working', 'on', 'JavaScript'];
// let sentence = '';
// for (let i = 0; i < arr.length; i++) {
//     sentence += arr[i] + ' ';
// }
// console.log(sentence);

// const colors = ["red", "blue", "green", "yellow"];

// for (let col of colors) {
//     console.log(col);
// }
