// fetch("api url")

//POST

const objArticle = {
    title: "How to work with JS",
    body : "Here is an article",
    userId : 100
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",
    body : JSON.stringify(objArticle),
    headers: {
        'Content-type': 'application/json',
    },
})
.then(response => response.json()) //.json method convert the JSON data into JS
.then(result => console.log(result))


// DJANGO 
//  templates, forms FRONT END

// JS
//     index.html, forms, fetch

// DJANGO REST : API
//     views, serialzers, urls, models BACK END