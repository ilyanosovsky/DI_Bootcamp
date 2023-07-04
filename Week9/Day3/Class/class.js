// console.log(fetch("https://jsonplaceholder.typicode.com/users")); //promise

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(result => {
//     if (result.ok) {
//         console.log(result.json()); //json() gives back the promise
//     } 
// })
// .then((data) => {
//     console.log("data", data);
// })


// fetch("https://jsonplaceholder.typicode.com/users") //get request
// .then(result => {
//     return result.json(); //promise //makes data available
// })
// .then((data) => {
//     displayRobot(data);
// })


// function displayRobot(robots) {
//     for (let robot of robots) {
//         console.log(`the robot is ${robot.name}`);
//     }
// }



//WEB API
// fetch("https://jsonplaceholder.typicode.com/users") //get request
// .then(result => {
//     console.log("res", result);
//     if (result.ok) {
//         return result.json();
//     } else {
//         throw new Error("issues with the fetch");
//     }
// })
// .then((data) => {
//     displayRobot(data)
// })
// .catch((error) => {
//     displayError(error)
// })


// function displayError(error) {
//     console.log("AN ERROR HAPPEND", error.message);
// }


// function displayRobot(robots) {
//     for (let robot of robots) {
//         console.log(`the robot is ${robot.name}`);
//     }
// }

// const btn = document.getElementById("btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("issues")
//         }
//     })
//     .then((data) => displayRobot(data))
//     .catch((error) => displayError(error))
// }


// const divElement = document.querySelector("#results")

// function displayError(error) {
//     // console.log("AN ERROR HAPPEND", error.message);
//     divElement.textContent = "Error try again";
// }


// function displayRobot(robots) {
//     for (let robot of robots) {
//         const para = document.createElement("p");
//         const text = document.createTextNode(`the robot is ${robot.name}, its email is ${robot.email}`);
//         para.appendChild(text);
//         divElement.appendChild(para)
//     }
// }








// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. 
// Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// and fetch this api 
// https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// const btn = document.getElementById("btn");
// btn.addEventListener("click", makeRequest);

// function makeRequest(word) {
//     fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("issues")
//         }
//     })
//     .then((data) => displayGif(data))
//     .catch((error) => displayError(error))
// }


// const divElement = document.querySelector("#results")

// function displayError(error) {
//     // console.log("AN ERROR HAPPEND", error.message);
//     divElement.textContent = "Error try again";
// }


// function displayGif(gifs) {

//     console.log(gifs);
//     const img = document.createElement('img');
//     const urlGif = gifs["data"]["images"]["original"]["url"];
//     img.src = urlGif;
//     divElement.appendChild(img);

// }

// function displayGif (randomGifData) {
//     const gifUrl = randomGifData.data.url;
//     console.log(gifUrl);
//     const myDiv = document.getElementById('gif');
//     const myImg = document.createElement('img');
//     myImg.src = gifUrl;
//     myDiv.appendChild(myImg);
// }

// Part II
// Instead of having a fixed category of gif. First, fetch one word from this 
// api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, 
// depending on the word. The word will be the gif category
// Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page

// function randomWord() {
//     fetch("http://random-word-api.herokuapp.com/word?number=1 ")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("issues")
//         }
//     })
//     .then((data) => displayWord(data))
//     .catch((error) => displayError2(error))
// }

// function displayError2(error) {
//     // console.log("AN ERROR HAPPEND", error.message);
//     divElement.textContent = "Error try again";
// }

// function displayWord(word) {

//     console.log(word);
// }

// randomWord()
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) 
// - display a gif that says "404 ERROR"





// function makeRequest() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("issues")
//         }
//     })
//     .then((data) => displayRobot(data))
//     .catch((error) => displayError(error))
// }





// ASYNC FUNCTIONS 

// const newpromise = new Promise((resolve, reject) => {
//     if (blabla) {
//         resolve("value")
//     } else {
//         reject("reason")
//     }
// })

// async function check() {
//     return "hello";
// }

// console.log(check());


// async function check2() {
//     throw new Error("rejection");
// }

// console.log(check2());



// function getGif (word) {
//     fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
//     .then(response => {
//         if(response.ok) {
//             return response.json()
//         } else {
//             throw new Error ("issues with fetch")
//         }
//     })
//     .then(datagif => {
//         if (datagif.length === 0) {
//             throw new TypeErrorError("Try again")
//         }
//         console.log("datagif", datagif);
//         const divElem = document.getElementById("results")
//         const image = document.createElement("img");
//         const urlGif = datagif["data"]["images"]["original"]["url"];
//         image.src = urlGif;
//         divElem.appendChild(image);
//     })
//     .catch(error => {
//         if (error.name === "TypeError") {
//             getWord()
//         } else {
//             console.log("ERROR", error)
//         }
//     })
// }

// function getWord () {
//     fetch("http://random-word-api.herokuapp.com/word?number=1")
//     .then(response => {
//         if(response.ok) {
//             return response.json()
//         } else {
//             throw new Error ("issues with fetch")
//         }
//     })
//     .then(word => {
//         console.log(word);
//         getGif(word[0]);
//     })
// }

// getWord()




const newpromise = new Promise((resolve, reject) => {
    if (true) {
        resolve("value")
    } else {
        reject("reason")
    }
})


const newpromise2 = new Promise((resolve, reject) => {
    resolve("hello")
})


// // //async function

async function check() {
    return "hello"; //promise is resolved
}

async function checkOne() {
    throw new Error("rejection");
}

const learnJS = () => {
    return new Promise(resolve => {
      setTimeout(() => {
          resolve('Javascript DONE')
      },3000)
    })
}

const learnReact = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('React DONE')
        },2000)
    })
}


// async function is asynchronous 
// while this function runs, the rest of the code can run
// its NOT BLOCKING

async function checkStudent(){
    // INSIDE THE FUNCTION
    // INSIDE SYNCHRONOUS
    //first learn JS
    const js = await learnJS();
    console.log("hello one", js);
    const react = await learnReact();
    console.log("hello two", react);
}

checkStudent()


for(let i = 0; i< 40; i++) {
    console.log(i);
}