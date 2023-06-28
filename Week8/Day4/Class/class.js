// const colors =["blue", "red", "yellow"];


//passing by reference
// function changeArr (arrColors) {
//     arrColors[0] = "white";
//     console.log("arrColors", arrColors);
//     console.log("colors", colors);
// }

// changeArr(colors);

//pass by value
// function changeArr2 (arrColors) {
//     console.log("arrColors", arrColors);
//     console.log("colors", colors);
//     arrColors[0] = "white";
//     console.log("arrColors", arrColors);
//     console.log("colors", colors);
//     return arrColors;
// }

// changeArr2([...colors]); //spread operator


// //rest operator
// //packing
// const [a,b,...c] = ["blue", "red", "yellow", "pink"]

// //spread operator
// //unpacking
// const arr = ["blue", ...["yellow", "red"]]




//-----------------OBJECTS-----------------
const family = {
    lastname:"Smith", 
    members:5, 
    dog:"Rex"
}

const dog1 = family["dog"];

//destructing
const {lastname,dog} = family;
console.log("lastname", lastname); //"Smith"
console.log("dog", dog); //"Rex"


//creating vars with different names than the keys
const {lastname:nameFamily,dog:dogFamily} = family;
console.log("lastname", nameFamily);
console.log("dog", dogFamily);



// const hero = {
//     name: "batman",
//     realName: "Bruce Eayne",
//     adress: {
//         city: "Gotham",
//         country: "Israel"
//     }
// };

//create 2 variables

// const cityHero = hero["adress"]["city"];

// const {realName, adress : {city, country}} = hero;

// const sentence =`${realName} lives in ${city} in ${country}`;
// console.log(sentence);


// const {realName:firstName, adress : {city:town, country}} = hero;

// const sentence =`${firstName} lives in ${town} in ${country}`;
// console.log(sentence);


const hero = {
    name: "batman",
    realName: "Bruce Eayne",
    adress: {
        city: "Gotham",
        country: "Israel"
    }
};

const {realName, ...other} = hero; //rest operator
// realName - string, other - object contains all the other keys




// Exercise1
// Part I
// What does the following code return/print?
// const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// const {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846


// Part II
// What does the following code return/print?
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {nept:1846,mars:1659}


// Exercise3
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 3 parameters : name, house and goodstudents)
function getDetails(object) {
    let {name, house, goodstudent} = object;
	console.log(name, house, goodstudent);
}

function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent);
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})



// Exercise4
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : name, house, friendName and age)
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


// Exercise5
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
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


// Exercise 6
// Display in the body of the document, the name, email and phone of every employee. 
// Use a loop and object destructuring
const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]

// employees.forEach((element) => {
//     const {name,email,phone} = element;
//     const sentence = `${name} emails is ${email} and phone number is ${phone}`;
// })

employees.forEach(({name, email, phone}) => {
    const sentence = `${name} emails is ${email} and phone number is ${phone}`;
    console.log(sentence);
})




