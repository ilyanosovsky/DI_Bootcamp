// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(function () {
    alert('Hello World');
} , 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

setTimeout(function () {
    let newP = document.createElement('p');
    let newText = document.createTextNode('Hello World');
    newP.appendChild(newText);
    document.querySelector('#container').appendChild(newP);
} , 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let myButton = document.querySelector('button');
let myDiv = document.querySelector('#container');
let myInterval = setInterval(function () {
    let newP = document.createElement('p');
    let newText = document.createTextNode('Hello World');
    newP.appendChild(newText);
    myDiv.appendChild(newP);
    if (myDiv.children.length === 5) {
        clearInterval(myInterval);
    }
} , 2000);

myButton.addEventListener('click', function () {
    clearInterval(myInterval);
} );
