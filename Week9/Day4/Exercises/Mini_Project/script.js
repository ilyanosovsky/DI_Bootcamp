const randBtn = document.getElementById('randomBtn');
randBtn.addEventListener('click', getPerson);

async function getPerson(num) {
    console.log("start fetching");
    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${getNum(num)}`)
        if (response.ok) {
            const dataPerson = await response.json();
            console.log(dataPerson);
            displayPerson(dataPerson)
        } else {
            throw new Error ("issues with fetch")
        }
    } catch (error){
        console.log("ERROR", error);
    }
}

const divElem = document.getElementById('info');
const pName = document.getElementById('namePerson');
const pHeight = document.getElementById('heightPerson');
const pGender = document.getElementById('genderPerson');
const pBirth = document.getElementById('birthPerson');
const pHome = document.getElementById('homePerson');

function displayPerson(dataPerson) {
    if (dataPerson['result']['properties']["message"] === "not found"){
        throw new Error ("Cannot Find a Person");
    } else {
        const personName = dataPerson['result']['properties']['name'];
        const personHeight = dataPerson['result']['properties']["height"];
        const personGender = dataPerson['result']['properties']["gender"];
        const personBirth = dataPerson['result']['properties']["birth_year"];
        // const personHome = dataPerson['result']['properties']["homeworld"];
        pName.textContent = personName;
        pHeight.textContent = `Height: ${personHeight}`;
        pGender.textContent = `Gender: ${personGender}`;
        pBirth.textContent = `Birth Year: ${personBirth}`;
        // pHome.textContent = personHome;
    }
}

function getNum () {
    let num = Math.floor(Math.random() * 83) + 1;
    return num
}