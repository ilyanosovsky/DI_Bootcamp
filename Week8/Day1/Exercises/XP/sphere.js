// Write a JavaScript program to calculate the volume of a sphere.
// Volume of a sphere = 4/3 πr3

const myForm = document.querySelector('form');
myForm.addEventListener("submit", getValuesForm)

function getValuesForm(event) {
    event.preventDefault(); //stop from refreshing
    const valueRadius = event.target.radius.value;
    if (valueRadius === "") {
        alert('input data');
    } else {
        let volume = (4 / 3) * Math.PI * Math.pow(valueRadius, 3);
        const myVolume = document.querySelector('#volume');
        myVolume.value = volume.toFixed(2);

    }
}


// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage.
//  Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, 
// for instance - change position x, change position y, 
// change color, change the font size… and more.

const myDiv = document.querySelector('div');
myDiv.addEventListener('click', changeColor);
myDiv.addEventListener('mouseover', changeSize);
myDiv.addEventListener('mouseout', changeSizeBack);
myDiv.addEventListener('dblclick', changePosition);

function changeColor() {
    myDiv.style.backgroundColor = 'red';
}

function changeSize() {
    myDiv.style.fontSize = '30px';
}

function changeSizeBack() {
    myDiv.style.fontSize = '16px';
}

function changePosition() {
    myDiv.style.position = 'absolute';
    myDiv.style.top = '250px';
    myDiv.style.left = '250px';
}




