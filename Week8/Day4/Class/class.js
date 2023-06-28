// const colors =["blue", "red", "yellow"];


// passing by reference
// function changeArr (arrColors) {
//     arrColors[0] = "white";
//     console.log("arrColors", arrColors);
//     console.log("colors", colors);
// }

// // changeArr(colors);

// //pass by value
// // function changeArr2 (arrColors) {
// //     console.log("arrColors", arrColors);
// //     console.log("colors", colors);
// //     arrColors[0] = "white";
// //     console.log("arrColors", arrColors);
// //     console.log("colors", colors);
// //     return arrColors;
// // }

// // changeArr2([...colors]); //spread operator


// // //rest operator
// // //packing
// // const [a,b,...c] = ["blue", "red", "yellow", "pink"]

// // //spread operator
// // //unpacking
// // const arr = ["blue", ...["yellow", "red"]]




// //-----------------OBJECTS-----------------
// const family = {
//     lastname:"Smith", 
//     members:5, 
//     dog:"Rex"
// }

// const dog1 = family["dog"];

// //destructing
// const {lastname,dog} = family;
// console.log("lastname", lastname); //"Smith"
// console.log("dog", dog); //"Rex"


// //creating vars with different names than the keys
// const {lastname:nameFamily,dog:dogFamily} = family;
// console.log("lastname", nameFamily);
// console.log("dog", dogFamily);



// // const hero = {
// //     name: "batman",
// //     realName: "Bruce Eayne",
// //     adress: {
// //         city: "Gotham",
// //         country: "Israel"
// //     }
// // };

// //create 2 variables

// // const cityHero = hero["adress"]["city"];

// // const {realName, adress : {city, country}} = hero;

// // const sentence =`${realName} lives in ${city} in ${country}`;
// // console.log(sentence);


// // const {realName:firstName, adress : {city:town, country}} = hero;

// // const sentence =`${firstName} lives in ${town} in ${country}`;
// // console.log(sentence);


const hero = {
    name: "batman",
    realName: "Bruce Eayne",
    adress: {
        city: "Gotham",
        country: "Israel"
    }
};

// const {realName, ...other} = hero; //rest operator
// // realName - string, other - object contains all the other keys




// // Exercise1
// // Part I
// // What does the following code return/print?
// // const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// // const {numPlanets, yearNeptuneDiscovered} = facts;

// // console.log(numPlanets); // 8
// // console.log(yearNeptuneDiscovered); // 1846


// // Part II
// // What does the following code return/print?
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {nept:1846,mars:1659}


// // Exercise3
// // Modify the code below, and destructure the object in the parameter 
// // (ie. you should have 3 parameters : name, house and goodstudents)
function getDetails(object) {
    let {name, house, goodstudent} = object;
	console.log(name, house, goodstudent);
}

function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent);
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})



// // Exercise4
// // Modify the code below, and destructure the object in the parameter 
// // (ie. you should have 4 parameters : name, house, friendName and age)
function getMoreDetails(object) {
    let {name, house, friend : {friendName, age}} = object;
	console.log(name, house, friendName, age)
}

function getMoreDetails({name, house, friend : {friendName, age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
			house: 'Gryfindor', 
			friend :  {
					friendName : 'Harry Potter', 
                    age : 20
				}
			})


// // Exercise5
// // Modify the code below, and destructure the object in the parameter 
// // (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
        amount: 2,
        value : "5Million"
    }
}

function getElonMuskDetails(object){
    let {
        first:firstname, 
        last:lastname,
        housesLocation: [locationOne, locationTwo], 
        houses: {value:valueHouses},
    } = object;
    console.log(firstname, lastname)
    console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)            


// // Exercise 6
// // Display in the body of the document, the name, email and phone of every employee. 
// // Use a loop and object destructuring
const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]

// // employees.forEach((element) => {
// //     const {name,email,phone} = element;
// //     const sentence = `${name} emails is ${email} and phone number is ${phone}`;
// // })

employees.forEach(({name, email, phone}) => {
    const sentence = `${name} emails is ${email} and phone number is ${phone}`;
    console.log(sentence);
})



// //keyword THIS 

const family2 = {
    lastname : "Smith",
    members : 6,
    showFamily: function () {
        const sentence = `The family name is ${this.lastname}`;
        console.log(sentence);
    }
}

family2.showFamily()



//create classes

class Family {
    constructor (last, number) {
        this.lastname = last;
        this.members = number;
    }

    showFamily () {
        const sentence = `The family name is ${this.lastname}`;
        console.log(sentence);
    }
}

const familyOne = new Family("Smith", 3);
console.log(familyOne); //object


class Wizard {
    constructor (name, power, life) {
        this.wizardName = name;
        this.power = power;
        this.life = life;
    }
    fight (otherwizard) {
        this.life -= 10;
        otherwizard.life -= 100;
    }
    showWizard () {
        const sentence = `The wizard ${this.wizardName} has ${this.life}`;
        console.log(sentence);
    }
}

const wizardOne = new Wizard("John", "fly", 200);
const wizardTwo = new Wizard("Emma", "read mind", 300);
wizardOne.showWizard();
wizardTwo.showWizard();
wizardTwo.fight(wizardOne);
wizardOne.showWizard();
wizardTwo.showWizard();


class DeveloperWizard extends Wizard {

    constructor (name, power, life, proglang){
        super(name, power, life);
        this.language = proglang;
    }

    showWizard (){
        const sentence = `The wizard ${this.wizardName} has ${this.life} lifes and code is ${this.language}`;
        console.log(sentence);
    }
}

const wizardThree = new DeveloperWizard("Tom", "code", 10, "JavaScript");
wizardThree.showWizard();


// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed

class Tv {
    constructor (brand, volume = 50, channel = 1) {
        this.brandTv = brand;
        this.channelTv = channel;
        this.volumeTv = volume;
    }
    increaseVolume () {
        this.volumeTv += 1;
    }
    decreaseVolume () {
        this.volumeTv -= 1;
    }
    showTv () {
        const tvShow = `This is ${this.brandTv} with ${this.volumeTv} volume`
        console.log(tvShow);
    }
}

const lgTv = new Tv("LG", 40, 10);
lgTv.increaseVolume();
lgTv.showTv();
lgTv.decreaseVolume();
lgTv.showTv();


// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default

class SmartTv extends Tv {
    constructor(brand, volume, channel, netflix = true){
        super(brand, volume, channel)
        this.netflix = netflix;
    }
    increaseVolume () {
        this.volumeTv += 10;
    }
}

const SmartLgTv = new SmartTv("LG", 100, 100);
SmartLgTv.increaseVolume();
SmartLgTv.showTv();