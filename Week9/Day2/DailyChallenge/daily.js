// Instructions
// 1rst Daily Challenge

// Create two functions. Each function should return a promise.

// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

function makeAllCaps(arr) {
    const newPromise = new Promise((resolve, reject) => {
        if (arr.every(word => typeof word === 'string')) {
            const newArr = arr.map(element => element.toUpperCase());
            resolve(newArr);
        } else {
            reject ("Not all words are string");
        }
    })
    return newPromise;
}

// makeAllCaps(["ivan", "kozin", "is", "just", "an", "opinion"])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })


// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.


function sortWords(arr) {
    const newPromise = new Promise((resolve, reject) => {
        if (arr.length > 4) {
            // const newArr = arr.map(element => element.sort());
            const newArr = arr.sort();
            resolve(newArr);
        } else {
            reject ("Not a good array");
        }
    })
    return newPromise;
}

// //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error))





// 2nd Daily Challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(morse) {
    const promiseOne = new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse)
        if (Object.keys(morseJS).length === 0) {
            reject('String is empty')
        } else {
            resolve(morseJS)
        }
    })
    return promiseOne
}




const userInput = prompt('Enter a word or a sentence') 



function toMorse(morseJS, userInput) {
    const word = userInput.toLowerCase().split('');
    const morseArray = [];

    const isValidMorse = word.every(char => char in morseJS);

    const promiseTwo = new Promise((resolve, reject) => {
        if (isValidMorse) {
            word.forEach(char => {
                morseArray.push(morseJS[char]);
            });
            console.log(`${userInput} gives you`);
            resolve(morseArray);
        } else {
            reject('Some character do not exist in the morse javascript object')
        }  
    })
    return promiseTwo;
}



toJs(morse)
.then(result => {
    console.log(result)
    return toMorse(result, userInput)
})
.then(result => {
    console.log(result)
    return joinWords(result)
})
.catch((error) => {
    console.log(error)
})

function joinWords(morseArray) {
    const myDiv = document.querySelector('div');
    myDiv.innerText = `${userInput} in morse code will be ${morseArray}`;
}