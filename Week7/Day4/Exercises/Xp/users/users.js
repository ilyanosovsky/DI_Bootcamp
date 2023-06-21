// Using Javascript:

// Retrieve the div and console.log it
console.log(document.querySelector("div"))

// Change the name “Pete” to “Richard”.
document.body.children[1].children[1].innerText = "Richard";

// Delete the second <li> of the second <ul>.
document.body.children[2].children[1].remove();

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for(let ul of document.querySelectorAll("ul")){
    ul.firstElementChild.innerText = "Ivan";
}

// Using Javascript:

// Add a class called student_list to both of the <ul>'s.
for (let ul of document.querySelectorAll("ul")){
    ul.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.
document.querySelector("ul").classList.add("university", "attendance");


// Using Javascript:

// Add a “light blue” background color and some padding to the <div>.
document.querySelector("div").style.backgroundColor = "lightblue";
document.querySelector("div").style.padding = "10px";

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
document.body.children[2].lastElementChild.style.display = "none";

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
document.body.children[1].children[1].style.border = "1px solid black";

// Change the font size of the whole body.
document.body.style.fontSize = "20px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(document.querySelector("div").style.backgroundColor === "lightblue"){
    alert("Hello Ivan and Richard");
}
