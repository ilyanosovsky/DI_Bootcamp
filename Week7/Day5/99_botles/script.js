// Prompt the user for a number to begin counting down bottles.

// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

function bottles() {
    let bottles = prompt("Enter a number to begin counting down bottles");
    let counter = 0;
    for (let i = bottles; i >= 0; i -= counter) {
        counter++;
        if (i === 1) {
            console.log(i + " bottle of beer on the wall");
        } else if (i === 0) {
            console.log("No bottle of beer on the wall");
        } else {
            console.log(i + " bottles of beer on the wall");
            console.log(i + " bottles of beer");
            const word = counter === 1 ? "it" : "them"
            console.log(`Take ${counter} down, pass ${word} around`);
        }
    }
}

