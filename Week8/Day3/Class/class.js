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
