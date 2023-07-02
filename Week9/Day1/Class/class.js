// Closures 
function getNumber(num) {
    let number = num;
    function multiply (multiplier) {
        number *= multiplier;
    }
    return multiply;
}

const outer = getNumber(3);
console.log(outer); // reference to inner function
outer(2); //6  inner function rins here
outer(5); //30





//CURRYING
//normal
function addition (a,b,c) {
    return a+b+c
}
addition(2,3,4)




//CURRYING with clousers
function addition (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const result = addition(2)(3)(4);
console.log(result);

// addition(2)(3)(4);


// function changeMoney(currency1) {
//     return function (amount) {
//         return function (rate) {
//             return `I change ${currency1} : ${amount * rate}`;
//         }
//     }
// }

const changeMoney = (currency1) => (amount) => (rate) => `I change ${currency1} : ${amount * rate}`;


const dollars = changeMoney("dollars");
const result1 = dollars(100)(1.4);
const result2 = dollars(30)(1.3);
const result3 = dollars(12)(1.1);

console.log(result1);
console.log(result2);
console.log(result3);

const euros = changeMoney("euros");
const result4 = euros(100)(1.4);
const result5 = euros(30)(1.3);
const result6 = euros(12)(1.5);


// COMPOSITION

function multiply (a,b) {
    return a*b
}

function add (res, c) {
    return res + c
}

const result_1 = multiply(2,4);
const result_2 = add(result_1, 2);




const g = (x) => x + 5;
const f = (x) => x / 2;
// const fg = (x) => f(g(x));

const res1 = g(2);
const res2 = f(res1);

// /COMPOSITION
const res = f(g(2)); // like f(7)


// EXERCISES

// Create a curried function, that returns the volume of an object the volume is calculated like this length * weight * height
// Call the function twice, for products of length 10cm. Weight and Height can differ
// Call the function twice, for products of length 10cm and weight 2 grams, height can differ

const val = (length) => (weight) => (height) => length * weight * height;

const prod1 = val(10);
const res_11 = prod1(2)(1);
const res_22 = prod1(21)(19);
console.log(res_11,res_22);

const prod2 = val(10)(2);
const res_3 = prod2(2);
const res_4 = prod2(5);
console.log(res_3,res_4);



// FORMS
const jsonstr = `{
    "employees" : [
        {"firstName" : "John", "lastName" : "Doe"},
        {"firstName" : "Ilya", "lastName" : "Nosovski"},
        {"firstName" : "Ivan", "lastName" : "Kozin"}
    ]
}`;
//conver from JSON string to JS object
const objData = JSON.parse(jsonstr);

const person = {first:"name", last:"Doe"};
//convert JS object to JSON string
const jsonstr2 = JSON.stringify(person);

const fruits = {
    color: 'red',
    amount: 10,
    prices: {
        euros: 2,
        dollars: 10,
        allprices: [10,20,30],
        pictures: {
            firstpic: "pear"
        }
    }
}

const marketFruit = {...fruits}
marketFruit["color"] = "yellow";
marketFruit['prices']['euros'] = 5;

//deep copy
const shoppingFruit = JSON.parse(JSON.stringify(fruits));


// Exercise with JSON
// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)


let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`
  

const objNba = JSON.parse(jsonString);
const questionSport = objNba['quiz']['sport']['q1']['options'];
console.log(questionSport);
questionSport.forEach(element => console.log((element)));

const backStr = JSON.stringify(objNba, null, 2);
console.log(backStr);




//EXCEPTIONS 
//throw the ERROR
// console.log(a);

const err = new Error("Smth bad happend!");

console.log(err);
console.log(err.message);
console.log(err.name);

console.log("Hello");

//THROW the error - I created an exeption
// throw new Error("Again bad things"); //throw an exeption
//not run below



function checkDeivision (firstnum, secondnum) {
    try {
        if (secondnum === 0) {
            throw new Error("can not divide by 0")
        } else {
            return firstnum/secondnum
        }
    } catch (err) {
        console.log(err.message);
    }
}
checkDeivision(2,0)




