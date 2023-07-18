const button = document.getElementById("get");

//GET REQUEST

//fetch with .then
// function getDataFromServer() {
//     fetch("http://localhost:3000/users")
//     .then((res) => res.json()) //parse data to json from server and monipulate 
//     .then((data) => console.log(data)) //take a data (json object) and log it
//     .catch((e) => console.log(e)); //catch an error and log it 
// };

// button.addEventListener("click", getDataFromServer);


// //fetch with async await
// async function getDataAsync() {
//     try {
//         const data = await fetch("http://localhost:3000/users");
//         const parsedData = await data.json();
//         console.log(parsedData);
//     } catch (e) {
//         console.log(e);
//     }
// }

// button.addEventListener("click", getDataAsync);



//params
// async function getDataAsync() {
//     try {
//         const res = await fetch("http://localhost:3000/users/2");
//         const data = await res.json();
//         console.log(data);
//         const myDiv = document.getElementById("message");
//         myDiv.innerText = `id of the user is ${data.userId}`;
//     } catch (e) {
//         console.log(e);
//     }
// }

// button.addEventListener("click", getDataAsync);


//looping through array of objects to find exact ID
async function getDataAsync() {
    try {
        const res = await fetch("http://localhost:3000/users/1");
        const data = await res.json();
        console.log(data);
        const myDiv = document.getElementById("message");
        if (res.status === 404) {
            myDiv.innerText = "User not found";
        } else if (res.status === 200) {
            myDiv.innerText = `Welcome ${data.name},you live in ${data.country}`;
        }
    } catch (e) {
        console.log(e);
    }
}

button.addEventListener("click", getDataAsync);


//POST REQUEST

const postButton = document.getElementById("post");
const username = document.getElementById("username");
const password = document.getElementById("password");

async function postData(e) {
    e.preventDefault();
    const usernameValue = username.value;
    const passwordValue = password.value;
    console.log(`${usernameValue} and ${passwordValue}`);
    const userData = {username:usernameValue, password:passwordValue}
    const res = await fetch('http://localhost:3000/register', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    const data = await res.json();
    console.log(data);
}

postButton.addEventListener('click', postData);