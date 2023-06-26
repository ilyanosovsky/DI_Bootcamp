// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed 
// (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

let form = document.querySelector("form");
let button = document.querySelector("#lib-button");
let shuffleButton = document.querySelector("#shuffle");
let story = document.querySelector("p");

let myNoun = document.querySelector("#noun");
let myAdjective = document.querySelector("#adjective");
let myPerson = document.querySelector("#person");
let myVerb = document.querySelector("#verb");
let myPlace = document.querySelector("#place");


function getValues() {
    myNounValue = myNoun.value;
    myAdjectiveValue = myAdjective.value;
    myPersonValue = myPerson.value;
    myVerbValue = myVerb.value;
    myPlaceValue = myPlace.value;
}

function checkValues() {
    if (myNounValue === "" || myAdjectiveValue === "" || myPersonValue === "" || myVerbValue === "" || myPlaceValue === "") {
        return false;
    } else {
        return true;
    }
}

function displayStory() {
    story.innerText = `Once upon a time, there was a ${myNounValue} who lived in ${myPlaceValue}. 
    He was a ${myAdjectiveValue} ${myPersonValue} who loved to ${myVerbValue}.`;
}

function displayError() {
    story.innerText = "Please enter all values";
}

function displayRandomStory() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            story.innerText = `Once upon a time, there was a ${myNounValue} who lived in ${myPlaceValue}. 
            He was a ${myAdjectiveValue} ${myPersonValue} who loved to ${myVerbValue}.`;
            break;
        case 1:
            story.innerText = `Once upon a time, there was a ${myAdjectiveValue} ${myNounValue} who lived in ${myPlaceValue}. 
            He was a ${myPersonValue} who loved to ${myVerbValue}.`;
            break;
        case 2:
            story.innerText = `Once upon a time, there was a ${myNounValue} who lived in ${myPlaceValue}. 
            He was a ${myPersonValue} who loved to ${myVerbValue}. He was very ${myAdjectiveValue}.`;
            break;
    }
}

button.addEventListener("click", function (e) {
    e.preventDefault();
    getValues();
    if (checkValues()) {
        displayStory();
    } else {
        displayError();
    }
} );

shuffleButton.addEventListener("click", function (e) {
    e.preventDefault();
    getValues();
    if (checkValues()) {
        displayRandomStory();
    } else {
        displayError();
    }
} );







