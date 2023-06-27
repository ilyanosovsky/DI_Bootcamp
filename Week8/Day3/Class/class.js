// for index
// for of --> arrays

// const fruits = ["pear", "apple", "melon"];

// for (let i=0; i < fruits.length; i++) {
//     fruits[i] += "s";
// }

// console.log(fruits);

//for each

// const fruits = ["pear", "apple", "melon"];

// Array.forEach(callbackfunc);

// function makePlural (element, index, array) {
//     console.log("element", element);
//     console.log("index", index);
//     console.log("array", array);
// }

// fruits.forEach(makePlural)

// fruits.forEach((element, index) => {   
//     fruits[index] += "s";
// })

// console.log(fruits);



// fruits.forEach((element, index) => {   
//     fruits[index] = element + "s";
// })

// console.log(fruits);

// fruits.forEach((element, index) => fruits[index] += "s")

// console.log(fruits);


// const fruits = ["pear", "apple", "melon", "lemon"];

// fruits.forEach((element, index) => element === "melon" ? fruits[index] += "&" : fruits[index] += "!" )

// console.log(fruits);

const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array and save it into a variable

let sum1 = 0;
for (s of prices) {  
    sum1+= s;
};
console.log(sum1);

// 2. Using the for each method, find the sum of the array and save it into a variable
let sum2 = 0;
prices.forEach((element, index) => {
    sum2 += prices[index];
})
console.log(sum2);



let sum3 = 0;
prices.forEach((element) => {
    sum3 += element;
})
console.log(sum3);



let sum4 = 0;
prices.forEach((price) => sum4 += price);
console.log(sum4);

// Exercise 2
// Write a function called doubleValues which accepts an array and doubles the values of the array
// Example : doubleValues([1,2,3]) // result [2,4,6]

function doubleValues(arr) {
    arr.forEach((element, index) => arr[index] *= 2)
    console.log(arr);
}

doubleValues([1,2,3]);

// Exercise 3
// Write a function called vowelCount which accepts a string and returns an object 
// with the keys as the vowel and the values as the number of times the vowel appears in the string. 
// This function should be case insensitive so a lowercase letter and uppercase letter should count

// Examples: vowelCount('Elie') // {e:2,i:1}; 
//           vowelCount('Tim') // {i:1}; 
//           vowelCount('Matt') // {a:1}) 
//           vowelCount('hmmm') // {}; 
//           vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

function vowelCount(str) {
    const vowels = ["a", "o", "e", "i", "u", "y"];
    const objVowels = {};
    const arrLetters = str.toLowerCase().split("");
    arrLetters.forEach((letter, index) => {
        if (vowels.includes(letter)) {
            if (letter in objVowels) {
                objVowels[letter] += 1;
            } else {
                objVowels[letter] = 1;
            }
        }
    })
    console.log(objVowels);
}

vowelCount("hello");
vowelCount('I Am awesome and so are you');





//map method 

const restaurant = [20,15.2,10];

const TAXES = 1.17;

//another array with taxes 
// function calculatePrices () {
//     const pricesTaxes = [];
//     for (let price of restaurant) {
//         pricesTaxes.push(price*TAXES);
//     }
//     console.log(pricesTaxes);
// }

// calculatePrices();

//map function

const pricesTaxes = restaurant.map((price) => price*TAXES);
console.log(pricesTaxes);



const students = [
    {name: 'Rich', score: 33},
    {name: 'Peter', score: 55}
];

// students[1].score
// students[1]["score"]

const allScores = students.map((element) => element["score"]);
console.log(allScores);


// Exercise 1
const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]
// Using the array above, use the map method, to create a new array 
// that contains only the name of the people

const allNames = famousPeople.map((element) => element["name"]);
console.log(allNames);

// Use the map method, to create a new array, that contains objects, 
// each object contains the name of the actor, and it's job
const allNamesJobs = famousPeople.map((element) => {
    const obj = {
        name : element["name"],
        job : element["job"]
    }
    console.log(obj);
});


// BONUS: Using the array you get from question2, use the for each method, 
// to add the names and the job of the actors on the 
// DOM (in a paragraph, appended to a div with an id "container")

const allNamesJobs2 = famousPeople.map((element) => { 
    return {
        namePers : element["name"],
        jobPers : element["job"]
    }
});
console.log(allNamesJobs2);

allNamesJobs2.forEach((person) => {
    const divEl = document.createElement('p');
    const text = document.createTextNode(`${person["namePers"]} is a ${person["jobPers"]}`);
    divEl.appendChild(text);
    document.body.appendChild(divEl);
})

//filter methods

const numbers = [12,3,7,8,19];

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers);



const students2 = [
    {name: 'Rich', score: 33},
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];


const specialStudents = students2.filter((element) => element["score"] > 50 && element["name"].length > 4);
console.log(specialStudents);

// Exercise 1: create a new array that filters only the positive value
const numbers2 = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const positive = numbers2.filter((element) => element > 0);
console.log(positive);

// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: 
// The Next Generation. Use filter() to filter the array of characters below
const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

const starTrek = characters.filter((element) =>  element["series"].includes('Star Trek: The Next Generation'));
console.log(starTrek);

const starTrekName = characters.filter((element) =>  element["series"].includes('Star Trek: The Next Generation')).map((element) => element["name"]);
console.log(starTrekName);




//some other methods

const nums = [2,5,7,18,4];
//at least one num bigger than 5
const isNumBigger = nums.some((element) => element > 5);
console.log(isNumBigger);


//all nums > 5
const isAllNums = nums.every((element) => element > 5);
console.log(isAllNums);




//reduce method
// an array in one value

const prices2 = [20,34,13,6];

const summ = prices2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(summ);


//start from 1000
const prices3 = [20,34,13,6];

const summ3 = prices3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 1000);
console.log(summ3);





const people = ["John", "Lea", "Tom"];

const acronym = people.reduce((accumulator, currentValue) => {
    return accumulator + currentValue[0];
}, "")

console.log(acronym);



// Exercise 1
const students5 = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];
// Find the sum of the score of the students using reduce

const sum5 = students5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue["score"];
}, 0);
console.log(sum5);



const sum6 = students5.map((element) => element["score"]).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum6);

// Exercise 2
// Turn an array of voter objects into a count of how many people voted
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

const votedPeople = voters.reduce((accumulator, currentValue) => {
    if (currentValue["voted"]) {
        return accumulator+1
    } else {
        return accumulator
    }
}, 0)
console.log(votedPeople);



const votedPeople2 = voters.reduce((accumulator, currentValue) => currentValue["voted"] ? accumulator+1 : accumulator, 0); 
console.log(votedPeople2);


const votedPeople3 = voters.reduce((accumulator, currentValue) => {
    return accumulator+currentValue["voted"];
}, 0)
console.log(votedPeople3);






const colors = ["blue", "red", "yellow"];

//destructuring
const [first, second] = colors;
console.log("first: ", first);
console.log("seconf: ", second);




//rest operator - packing the array

const colors2 = ["blue", "red", "yellow", "black", "red"];

const [a,b, ...c] = colors2;
console.log("c: ", c);





//spread operator
//unpacking an array

const leters = ["a", "b", "c"];
const numms = [1,2,3];
const all = [...leters, ...numms];
console.log(all);


const colors3 = ["blue", "red"];
const fav = ["white", ...colors3];
console.log(fav);




const colors4 = ["blue", "red", "yellow", "black", "red"];
const myColors = colors4; //point to the same refference

myColors[0] = "pink";
console.log("my ", myColors);
console.log("col", colors4);

const favcol = [...colors4];
favcol[0] = "green";
console.log("my new", myColors);
console.log("col new", colors4);
console.log("fav new", favcol);





