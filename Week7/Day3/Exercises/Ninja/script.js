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

// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

let gradesList = [55, 77, 88, 95, 63];

function findAvg(gradesList) {
    let sum = 0;
    for (let i of gradesList) {
        sum += i;
    }
    let avg = sum / gradesList.length;
    console.log(avg);
    if (avg > 65) {
        console.log('You passed.');
    } else {
        console.log('You failed and must repeat the course.');
    }
}

findAvg(gradesList);