// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

let allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        image: "https://www.bookstation.ie/wp-content/uploads/2019/06/Harry-Potter-25-Year.jpg",
        alreadyRead: true
    },
];

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let section = document.querySelector("section");

for (let book of allBooks){
    let div = section.appendChild(document.createElement("div"));
    div.appendChild(document.createElement("h1")).innerText = book.title;
    div.appendChild(document.createElement("h2")).innerText = book.author;
    div.appendChild(document.createElement("img")).src = book.image;
    if(book.alreadyRead){
        div.style.color = "red";
    }
}

for (let img of document.querySelectorAll("img")){
    img.style.width = "100px";
}