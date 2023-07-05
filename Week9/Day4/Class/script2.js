const gifForm = document.querySelector("#gifForm");
gifForm.addEventListener("submit", fetchGif);

async function fetchGif(event) {
    try { 
        event.preventDefault();
        const inputValue = document.querySelector("#category").value;
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${inputValue}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        if (response.ok) {
            const dataGif = await response.json();
            displayGif(dataGif)
        } else {
            throw new Error("PROBLEM")
        }
    } catch(error) {
        console.log("ERROR", error);
    }
}

function displayGif(dataGif) {
    const div = document.getElementById("container");
   
    console.log("----in displaygif----");
    const gifURL = dataGif["data"]["images"]["original"]["url"];

    const divGif = document.createElement("div");
    divGif.style.border = "2px solid black";
    const image = document.createElement("img");
    image.src = gifURL;
    const button = document.createElement("button");
    button.addEventListener("click", deleteGif);
    const text = document.createTextNode("DELETE GIF");
    button.appendChild(text)
    divGif.appendChild(image);
    divGif.appendChild(button);

    div.appendChild(divGif);

    if(div.children.length === 1) {
        const buttonDeleteAll = document.createElement("button");
        const text = document.createTextNode("DELETE ALL");
        buttonDeleteAll.id = "deleteAll";
        buttonDeleteAll.appendChild(text);
        buttonDeleteAll.addEventListener("click", deleteAll);
        document.body.insertBefore(buttonDeleteAll, div);
    }
}

function deleteGif(event) {
    const parent = event.target.parentElement;
    parent.remove()
}


function deleteAll() {
    const divContainer = document.querySelector("#container");
    while(divContainer.firstElementChild){
        divContainer.firstElementChild.remove();
    }

    const buttonDelete = document.querySelector("#deleteAll");
    buttonDelete.remove()
}