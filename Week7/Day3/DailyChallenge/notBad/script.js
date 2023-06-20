// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

const sentence = 'The movie is not that bad, Ivan likes it';

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

const wordNot = sentence.indexOf('not');

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

const wordBad = sentence.indexOf('bad');

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”

if (wordBad > wordNot) {
    const newSentence = sentence.replace('not that bad', 'good');
    console.log(newSentence);
} else {
    console.log(sentence);
}