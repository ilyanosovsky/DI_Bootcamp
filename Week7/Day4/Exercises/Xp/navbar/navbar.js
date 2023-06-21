// Using Javascript, in the <div>, change the value of the id attribute
// from navBar to socialNetworkNavigation, using the setAttribute method.

document.querySelector("div").setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.querySelector("ul").appendChild(document.createElement("li"));

// Create a new text node with “Logout” as its specified text.
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
newLi.appendChild(document.createTextNode("Logout"));

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). 
// Display the text of each link. (Hint: use the textContent property).
console.log(document.querySelector("ul").firstElementChild.textContent);
console.log(document.querySelector("ul").lastElementChild.textContent);


