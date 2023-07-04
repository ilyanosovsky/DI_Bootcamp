function getGif (word) {
    fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error ("issues with fetch")
        }
    })
    .then(datagif => {
        if (datagif.length === 0) {
            throw new TypeErrorError("Try again")
        }
        console.log("datagif", datagif);
        const divElem = document.getElementById("results")
        const image = document.createElement("img");
        const urlGif = datagif["data"]["images"]["original"]["url"];
        image.src = urlGif;
        divElem.appendChild(image);
    })
    .catch(error => {
        if (error.name === "TypeError") {
            getWord()
        } else {
            console.log("ERROR", error)
        }
    })
}

function getWord () {
    fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error ("issues with fetch")
        }
    })
    .then(word => {
        console.log(word);
        getGif(word[0]);
    })
}

getWord()

