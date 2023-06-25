const colors = ["blue", "yellow", "green", "pink"];

function addButtons () {
    let divContainer = document.querySelector("#container");
    for (let color of colors) {
        const newButton = document.createElement("button");
        const newText = document.createTextNode(color);
        newButton.appendChild(newText);
        newButton.addEventListener('click', changeColor);
        divContainer.appendChild(newButton);
    }
}

addButtons()


function changeColor(event) {
    const colorButton = event.target.textContent;
    document.body.style.backgroundColor = colorButton;
}