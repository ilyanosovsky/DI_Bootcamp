const fs = require('fs');

fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    let steps = 0;
    let counter = 0;

// task number 1
    // for (let symbol of data) {
    //     if (symbol === ">") {
    //         steps++;
    //     } else if (symbol === "<") {
    //         steps--;
    //     }
    // }
    // console.log(`Total steps: ${steps}`);
// task number 2
    for (let symbol of data) {
        counter++;
        if (symbol === ">") {
            steps++;
        } else if (symbol === "<") {
            steps--;
        }
        if (steps == -1) {
            console.log(`The first time on the left side is in: ${counter} steps`);
            break
        }
    }
});

