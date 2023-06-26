// function welcome () {
//     alert("welcome");
// }

// welcome()


// // function expressions 
// const welcome = function () {
//     alert("hello");
// }

// welcome()

//Arrow => function
// it automaticaly return the value
// () => {
//     alert("hello")
// }

// const welcomeThree = () => {
//     alert("hello");
// }

// welcomeThree()

// function add (a,b) {
//     return a+b
// }
// add(2,5);

// const add2 = (a,b) => a+b;
// add2(10,5);
// // if your func is only one line func
// // and the goal is to return smth
// //dont need curly brackets

// const addF = (a,b) => a > b ? a + b : a - b;

// Exercise 1:
// Return the name of the the user, the user's name is a parameter. Do this exercise,
// - first by using function declarations
// - then function expression,
// - then arrow function

// function user(username) {
//     return username;
// }
// user("ivan");



// const user2 = function (username) {
//     return username;
// }

// user2("ivan")


// const user3 = (username) => username;
// user3("ivan")

// Exercise 2: Function & Arrow function & Ternary Operator
// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

// - first by using function declarations
// - then function expression,
// - then arrow function

// function userAge(age) {
//     if (age > 18) {
//         return "You can drive";
//     } else {
//         return "You can not drive";
//     }
// }
// userAge("ivan");

// function userAge(age) {
//     return age > 18 ? "you can" : "you can not"
// }

// const userAge = function(age) {
//     return age > 18 ? "you can" : "you can not"
// }

// const userAge = age => age > 18 ? "you can" : "you can not";

//self invoking
// (function () {
//     console.log("welcome");
// }) ();

// (function () {
//     const nav = document.getElementById("nav");
//     nav.textContent = "Hello John";
// }) ();

// (() => {
//     const nav = document.getElementById("nav");
//     nav.textContent = "Hello John";
// }) ();

// ((user) => {
//     const nav = document.getElementById("nav");
//     nav.textContent = "Hello " + user;
// }) ("John");


//INNER FUNCTIONS
//outer
// function makeHoumous (size) {

//     //inner
//     function getIngredients () {
//         const ingredients = "pears";
//         // console.log("I'm cooking");
//         const text = `I'm cooking ${size} with ${ingredients}`;
//     }
//     getIngredients();
// }

// makeHoumous(200);


// Nested functions

// 1. Create a function named starWars that takes no parameter.
// 2. The function should declare a variable characters equal to an empty array
// 3. In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// 4. In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// 5. Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

// function starWars () {
//     let arr = [];
//     function createCharacter(firstname, lastname = 'Smith') {
//         arr.push(`${firstname} ${lastname}`);
//     };
//     function displayCharacter() {
//         for (let person of arr) {
//             console.log(person);
//         }
//     }
//     createCharacter("Ivan", "Kozin");
//     createCharacter("ilya", "Tennis");
//     displayCharacter();
// }

// starWars()

// Second Part : BONUS

// 6. Change the starWars function, to take one parameter, the name of the spaceship the characters are in 
// 7. The displayCharacter function should now display in the body the fullname and spaceship of the characters 
// 8. Call the starWars function once with the spaceship "The Devastator", and another times with the spaceship "Republic Attack Cruiser". what happens?



//CLOSURES

function getNumber (num) {
    let number = num

    function multiply (multiplier) {
        number *= multiplier;
        console.log(number);
    }
    return multiply //return the reference to the function
}

// getNumber(5)(10) //50

const outer = getNumber(5);
outer(2);
outer(3);