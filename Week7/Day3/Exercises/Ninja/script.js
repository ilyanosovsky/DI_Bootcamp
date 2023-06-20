// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.

let person1 = {
    fullName: 'Ivan',
    mass: 81,
    height: 1.91
};

let person2 = {
    fullName: 'Sasha',
    mass: 60,
    height: 1.65
};

function bmi(person) {
    return person.mass / person.height ** 2;
}

function compare(person1, person2) {
    if (bmi(person1) > bmi(person2)) {
        console.log(`${person1.fullName} has the largest BMI.`);
    } else if (bmi(person1) < bmi(person2)) {
        console.log(`${person2.fullName} has the largest BMI.`);
    } else {
        console.log('Both have the same BMI.');
    }
}

compare(person1, person2);