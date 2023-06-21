// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = [
    {
        name: "Mercury",
        moons: 0
    },
    {
        name: "Venus",
        moons: 0
    },
    {
        name: "Earth",
        moons: 1
    },
    {
        name: "Mars",
        moons: 2
    },
    {
        name: "Jupiter",
        moons: 79
    },
    {
        name: "Saturn",
        moons: 82
    },
    {
        name: "Uranus",
        moons: 27
    },
    {
        name: "Neptune",
        moons: 14
    }
];

let section = document.querySelector("section");

for (let planet of planets){
    let div = section.appendChild(document.createElement("div"));
    div.classList.add("planet");
    div.style.backgroundColor = randomColor();
    div.appendChild(document.createElement("h1")).innerText = planet.name;
    for(let i = 0; i < planet.moons; i++){
        let moon = div.appendChild(document.createElement("div"));
        moon.classList.add("moon");
        moon.style.backgroundColor = randomColor();
    }
}

function randomColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
}
