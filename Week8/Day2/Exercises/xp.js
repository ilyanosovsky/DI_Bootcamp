// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // answer is 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ? ---- does not work with const

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() //0
// funcTwo() //5
// funcThree() //not def
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() //hello
// funcFive() //none

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?


//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?


// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints 
// variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// const winBattle = () => true;

// let experiencePoints;

// const winBattle = () => true ? experiencePoints = 10 : experiencePoints = 1;

// winBattle();
// // console.log(winBattle());
// console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed,
//  is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// const isString = (str) => (typeof str === 'string') ?  true : false;


// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const mySum = (a,b) => (a+b);
// console.log(mySum(2,5));

// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// (function weightGrams(kg) {
//     console.log(kg * 1000); 
// })(10);

// ((kg) => { console.log(kg * 1000);}) (5);

// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function teller () {
//     let numberOfChildren = 4;
//     let partnersName = "ivan";
//     let geographicLocation = "israel";
//     let jobTitle = "programmer";

//     const text = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
//     const textNode = document.createTextNode(text);
//     document.body.appendChild(textNode);
// }) ();


// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function welcome (user) {
    const navBar = document.getElementById("nav");
    navBar.textContent = "Hello " + user;
}) ("John");

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 
// 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 
// 3 ingredients, and displays on the DOM a sentence like 
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. 
// Then invoke the outer function in the global scope.

// function makeJuice(size) {
//     let juiceSize = size;
//     function addIngredients (a, b, c) {
//         const text = `The client wants a ${juiceSize} juice, containing ${a}, ${b}, ${c}`;
//         const textNode = document.createTextNode(text);
//         document.body.appendChild(textNode);
//     } 
//     addIngredients("apple", "orange", "melon");
// }
// makeJuice("small");



// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, 
// and push them into the ingredients array.

// // Create a new inner function named displayJuice that displays on the DOM a sentence like 
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// // The client wants 6 ingredients in his juice, therefore, 
// invoke the addIngredients function TWICE. Then invoke once the displayJuice function. 
// Finally, invoke the makeJuice function in the global scope.

// function makeJuice(size) {
//     let ingredients = [];
//     let juiceSize = size;
//     function addIngredients (a, b, c) {
//         ingredients.push(a, b, c);
//     };
//     function displayJuice () {
//         let text = `The client wants a ${juiceSize} juice, containing: `;
//         for (let ing of ingredients){
//             text += ing + ", ";
//         }
//         const textNode = document.createTextNode(text);
//         document.body.appendChild(textNode);
//     }
//     addIngredients("apple", "orange", "melon");
//     addIngredients("banana", "lemon", "grape");
//     displayJuice()
// }
// makeJuice("small");