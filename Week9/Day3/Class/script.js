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



async function getGif (word) {
    console.log("start fetching a gif ...");
    try { 
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        if(response.ok) {
            const datagif = await response.json(); //PROMISE
            displayGif(datagif, word);
        } else {
            throw new Error ("issues with fetch")
        }
    }catch(error) {
        if (error.message === "Cannot Find a Gif") {
            getWord()
        } else {
            console.log("ERROR", error)
        }
    }
}

function displayGif (datagif, word) {
    if (datagif["data"].length === 0) {
        console.log("Cannot Find a Gif");
        throw new Error ("Cannot Find a Gif");
    } else {
        const divElem = document.getElementById("container");
        const image = document.createElement("img");
        const urlGif = datagif["data"]["images"]["original"]["url"];
        image.src = urlGif;
        const para = document.createElement("p");
        const text = document.createTextNode(word);
        para.append(text);
        divElem.appendChild(para);
        divElem.appendChild(image);
    }
}

async function getWord () {
    try {
        console.log("start fetching a word ...");
        const response = await fetch("http://random-word-api.herokuapp.com/word?number=1");
        if(response.ok) {
            // const [word] = await response.json(); //DESTRUCTURING
            // getGif(word); 
            const word = await response.json(); //DESTRUCTURING
            getGif(word[0]); 
        } else {
            throw new Error ("issues with fetch")
        }
    } catch(error) {
        console.log("ERROR IN GET WORD");
    }
}

getWord()
