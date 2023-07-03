// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(...data) {
    const res = data.every(element => element != false);
    // const res = data.every(element => Boolean(element) === true);
    console.log(res);
}


allTruthy(true, true, true);
allTruthy(true, false, true);
allTruthy(5, 4, 3, 2, 1, 0);