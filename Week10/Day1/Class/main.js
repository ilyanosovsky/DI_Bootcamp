// const b = require('./greeting.js');

// b("Ivan Kozinnnnn");

// https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method : "GET",
//     body : JSON.stringify(objArticle),
//     headers: {
//         'Content-type': 'application/json',
//     },
// })
// .then(response => response.json()) //.json method convert the JSON data into JS
// .then(result => console.log(result))

// async function getData (link) {
//     try {
//         const response = await fetch(link)
//         if (response.ok) {
//             const data = await response.json();
//             return data
//         } else {
//             throw new Error("PROBLEM");
//         }
//     } catch (error) {
//         console.log("ERROR");
//     }
// }



// module.exports = {
//     getData,
// }









const userInfo = async() => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    userInfo,
}
