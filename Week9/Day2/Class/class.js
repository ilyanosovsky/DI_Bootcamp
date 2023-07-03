// // synchronous
console.log(1);
console.log(2);
console.log(3);

function funcOne (name, callback){
    console.log("In the first function"); //2
    callback(name) //3 funcTwo("John")
    console.log("hello")  //6
}

function funcTwo (name){
    console.log("In the callback function"); //4
    console.log(name.toUpperCase());  //5
}

funcOne("John", funcTwo) //1

// function task(message) {
//     // emulate time consuming task
//     let n = 10000000000;
//     while (n > 0){
//         n--;
//     }
//     console.log(message);
// }

// console.log('Start script...');
// task('Download a file.');
// console.log('Done!');

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => console.log("clicked"))

// ASYNC

console.log("1");  //1
console.log("2"); //2

setTimeout(function (){ //3
    console.log("callback function") //6
},2000)

console.log("3"); //4
console.log("4"); //5

//OTHER ASYNC EXAMPLE

setTimeout(function(){ //1
    console.log("this is the first message")}
, 5000);

setTimeout(function(){ //2
    console.log("this is the second message")}
, 3000);

setTimeout(
    function(){ //3
        console.log("this is the third message")}
, 1000);

const grade = 80;

const firstPromise = new Promise((resolve, reject) => {
    if (grade > 70) {
        resolve("computer"); //the result of the promise
    } else {
        reject("bad grades"); //the reason of the rejection
    }
})

const otherPromise = new Promise((resolve, reject) => {
    console.log("in the promise");
    setTimeout (() => {
        if (grade > 70) {
            resolve(["computer", "flower", "car"]); //the result of the promise
        } else {
            reject("bad grades"); //the reason of the rejection
        }
    }, 3000)
})

for(let i=0; i<10; i++) {
    console.log(i);
}
//consume the promise //retrieving the result of the promise
//retrieve the result passed to the resolve function
otherPromise
.then((result) => {
    for (let gift of result){
        console.log(`I got a ${gift}`);
    }
    console.log(a);
})
.catch((error) => {
    if (error.name === "ReferenceError") {
        console.log(`PROBLEM I got an error ${error}`);
    } else {
        console.log("ERROR");
    }
})

// -------------------

const time = 9

const getMilk = new Promise((resolve, reject) => {
    setTimeout (() => {
        if (time > 8) {
            resolve("Milk")
        } else {
            reject("Too late")
        }
    }, 2000)
})

console.log("cleaning the kitchen");

const supermarketOpen = true;

const getFruits = new Promise((resolve, reject) => {
    setTimeout (() => {
        if (supermarketOpen) {
            resolve("Fruits Bought")
        } else {
            reject("Not opened")
        }
    }, 4000)
})

getMilk
.then((result) => {
    console.log(result); //Milk Bought
})

getFruits
.then((result) => {
    console.log(result); //Milk Bought
})


getMilk
.then((result) => {
    console.log(result); //Milk Bought
    return getFruits
})
.then((result2) => {
    console.log(result2); //Fruits Bought
    console.log("I make the milkshake");
})
.catch((error) => {
    console.log("ERROR", error);
})


// EXAMPLE
// getLocation //tel aviv
// .then((result) => {
//     return getWeather //with the location //30
// })
// .then ((result) => {
//     display on the page the 30 degrees in TLV
// })
// .catch((error) => {
//     display the error
// })


// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error 
// finally call a function that console.log ("congratulation")


function func(str) {
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str === 'string') {
                resolve (str.toUpperCase());
            } else {
                reject (str);
            }
        }, 5000)
    })
    return newPromise ;
};

func("congratulation")
.then((res) => {
    console.log(res, res);
})
.catch((error) => {
    console.log("ERROR", error);
})
.finally(() => console.log("congratulation"));



func("congratulation")
.then((res) => {
    const newRes = res + res;
    return newRes;
})
.then((res2) => {
    const arr = res2.split("");
    console.log(arr);
})
.catch((error) => {
    console.log("ERROR", error);
})
.finally(() => console.log("congratulation"));