// Using a DOM property, retrieve the h1 and console.log it.
let head = document.querySelector('h1');
console.log(head);

// Using DOM methods, remove the last paragraph in the <article> tag.
let elementToDel = document.body.firstElementChild.lastElementChild;
elementToDel.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let redHead = document.querySelector('h2');
redHead.addEventListener('click', toRed);

function toRed() {
    redHead.style.backgroundColor = "red";
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let hideHead = document.querySelector('h3');
hideHead.addEventListener('click', toHide);

function toHide() {
    hideHead.style.display = "none";
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let divArticle = document.querySelector('article');
let newButton = document.createElement('button');
let newText = document.createTextNode('Bold Paragraphs');
newButton.appendChild(newText);
newButton.addEventListener('click', changeToBold);
divArticle.appendChild(newButton);

function changeToBold() {
    let allP = document.querySelectorAll("p");
    for (let el of allP) {
        el.style.cssText = "font-weight : bold";
    }
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
head.addEventListener('mouseover', changeSize);

function changeSize() {
    let num = Math.floor(10 + Math.random() * 90); // 10–100
        head.style.fontSize = num + 'px';
}


// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let pSecond = document.querySelectorAll("p")[1];
pSecond.addEventListener('mouseover', toFade);

function toFade() {
    pSecond.classList.toggle('fade');
}


// -----------------------------------------------------------------

// Retrieve the form and console.log it.
let myForm = document.querySelector('form');
console.log(myForm);

// Retrieve the inputs by their id and console.log them.
myForm.addEventListener("submit", getValuesForm)

function getValuesForm(event) {
    event.preventDefault(); //stop from refreshing
    const valueName = event.target.fname.value;
    const valueLast = event.target.lname.value;
    console.log(valueName, valueLast);
}

// Retrieve the inputs by their name attribute and console.log them.
myForm.addEventListener("submit", getValuesForm)

function getValuesForm(event) {
    event.preventDefault(); //stop from refreshing
    const valueName = event.target.ferstname.value;
    const valueLast = event.target.lastname.value;
    console.log(valueName, valueLast);
    if (valueName === "" && valueLast === "") {
        alert('input data');
    } else {
        let myUl = document.querySelector('ul');
        let myLi = document.createElement('li');
        myLi.appendChild(document.createTextNode(`${valueName} ${valueLast}`));
        myUl.appendChild(myLi);
    }
}


// Declare a global variable named allBoldItems.
let allBoldItems = [];
let lastPar = document.querySelectorAll("strong");

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items
//  inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {

    for (let i = 0; i < lastPar.length; i++) {
        allBoldItems.push(lastPar[i]);
    }
    console.log(allBoldItems);
}

// getBoldItems();
// Create a function called highlight() that changes the color of all the bold text to blue.


function highlight() {
    let blueItems = allBoldItems;
    for (let item of blueItems) {
        item.style.color = 'blue';
    }
}
// getBoldItems();
// highlight();

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

function returnItemsToDefault() {
    let blackItems = allBoldItems;
    for (let item of blackItems) {
        item.style.color = 'black';
    }
}

// getBoldItems();
// returnItemsToDefault();

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
//  and the function returnItemsToDefault() on mouseout 
// (ie. when the mouse pointer is moved out of the paragraph). Look at this example

getBoldItems();

let boldPar = document.body.lastElementChild.previousElementSibling;
boldPar.addEventListener("mouseover", highlight);
boldPar.addEventListener("mouseout", returnItemsToDefault);


