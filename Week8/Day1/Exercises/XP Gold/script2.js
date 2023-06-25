// Add a click event listener to the <input type="button">. 
// When clicked on, it should call a function named : removecolor() 
// that removes the selected color from the dropdown list.

// let select = document.querySelector("select");
// let button = document.querySelector("input[type='button']");
// let selectedOption = select.options[select.selectedIndex];

// button.addEventListener("click", function () {
//     select.remove(select.selectedIndex);
//     console.log(selectedOption.value);
//     }
// );

// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];
let myDiv = document.querySelector("div");
let form = document.createElement("form");
let input = document.createElement("input");
let button = document.createElement("input");

form.appendChild(input);
form.appendChild(button);
myDiv.appendChild(form);

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add item");
button.setAttribute("type", "button");
button.setAttribute("value", "Add item");

button.addEventListener("click", function () {
    addItem();
}
);

function addItem() {
    let item = input.value;
    shoppingList.push(item);
    console.log(shoppingList);
}

let clearButton = document.createElement("input");
clearButton.setAttribute("type", "button");
clearButton.setAttribute("value", "Clear all");
myDiv.appendChild(clearButton);

clearButton.addEventListener("click", function () {
    clearAll();
}
);

function clearAll() {
    shoppingList = [];
    console.log(shoppingList);
}












