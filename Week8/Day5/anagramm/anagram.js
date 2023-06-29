// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first 
// string is an anagram of the second string.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

function anagram(str1, str2) {
    let str1Arr = str1.toLowerCase().split("").sort();
    let str2Arr = str2.toLowerCase().split("").sort();
    if (str1Arr.length !== str2Arr.length) {
        return false;
    } else {
        for (let i = 0; i < str1Arr.length; i++) {
            if (str1Arr[i] !== str2Arr[i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(anagram("Astronomer", "Moon starer"));
console.log(anagram("School master", "The classroom"));
console.log(anagram("The Morse Code", "Here come dots"));