// 🌟 Exercise 1 : Colors
// Instructions
// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

const checkRes = colors.some((e,i) => colors[i] === "Violet") ? "Yeah": "No...";
console.log(checkRes);

colors.forEach((e,i) => {
    colors[i] = [i+1] + "# choice is " + e;
    console.log(colors[i]);
});

// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :

const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following 
// order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors2.forEach((el, index) => {
    const suffix = (index + 1) <= 3 ? ordinal[index + 1] : ordinal[0];
    const choice = `${index + 1}${suffix} choice is ${el}`;
    console.log(choice);
});


// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // bread, carrot, potato, chicken, apple, orange

// ------2------
const country = "USA"; //spread
console.log([...country]); //U,S,A

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); //[],[]

// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
const allNames = users.map((el) => `Hello ${el['firstName']}`);
console.log(allNames);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const isFull = users.filter((el) => el["role"].includes('Full Stack Resident'));
console.log(isFull);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const isFullLast = users.filter((el) => el["role"].includes('Full Stack Resident')).map((el) => el["lastName"]);
console.log(isFullLast);


// 🌟 Exercise 6 : Star Wars
// Instructions
// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const line = epic.reduce((acc, curV) => acc + " " + curV);
console.log(line);


// 🌟 Exercise 7 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


// Using the filter() method, create a new array, containing the students that passed the course.
const passed = students.filter((el) => el["isPassed"] === true);
console.log(passed);

// Bonus : Chain the filter method with a forEach method, to congratulate the students 
// with their name and course name (ie. “Good job Jenner, you passed the course 
//     in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

let l = [];
passed.forEach((el) => l.push(`Good job ${el["name"]}, you passed the course in ${el["course"]}`));
console.log(l);
