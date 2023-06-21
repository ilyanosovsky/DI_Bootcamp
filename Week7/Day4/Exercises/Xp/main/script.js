// 🌟 Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

function displayNumbersDivisible(divisor){
    let sum = 0;
    for(let i = 0; i <= 500; i++){
        if(i % divisor === 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}

displayNumbersDivisible(23);



// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// Bonus: If the item is in stock, decrease the item’s stock by 1

function myBill() {
    let total = 0;
    for(let item of shoppingList){
        if(item in stock){
            total += prices[item];
            stock[item] -= 1;
        }
    }
    return total;
}

console.log(myBill());

// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


function changeEnough(itemPrice, amountOfChange){
    let total = 0;
    let change = [0.25, 0.10, 0.05, 0.01];
    for (let i = 0; i < amountOfChange.length; i++){
        total += change[i] * amountOfChange[i];
    }
    return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));


// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(){
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while(isNaN(nights)){
        nights = prompt("Please enter a number");
    }
    return nights * 140;
}

// console.log(hotelCost());

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost(){
    let destination = prompt("Where would you like to go?");
    while(!isNaN(destination)){
        destination = prompt("Please enter a valid string");
    }
    if(destination === "London"){
        return 183;
    }
    else if(destination === "Paris"){
        return 220;
    }
    else{
        return 300;
    }
}

// console.log(planeRideCost());

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(){
    let days = prompt("How many days would you like to rent the car?");
    while(isNaN(days)){
        days = prompt("Please enter a valid number");
    }
    let total = days * 40;
    if(days > 10){
        total *= 0.95;
    }
    return total;
}

// console.log(rentalCarCost());

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost(){
    let total = `The car cost: $${rentalCarCost()}, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}.`
    return total;
}

console.log(totalVacationCost());

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function hotelCost(nights){
    return nights * 140;
}

function planeRideCost(destination){
    if(destination === "London"){
        return 183;
    }
    else if(destination === "Paris"){
        return 220;
    }
    else{
        return 300;
    }
}

function rentalCarCost(days, total){
    total = days * 40;
    if(days > 10){
        total *= 0.95;
    }
    return total;
}

function totalVacationCost(){
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while(isNaN(nights)){
        nights = prompt("Please enter a number");
    }
    let destination = prompt("Where would you like to go?");
    while(!isNaN(destination)){
        destination = prompt("Please enter a valid string");
    }
    let days = prompt("How many days would you like to rent the car?");
    while(isNaN(days)){
        days = prompt("Please enter a valid number");
    }
    let total = `The car cost: $${rentalCarCost(days)}, the hotel cost: $${hotelCost(nights)}, the plane tickets cost: $${planeRideCost(destination)}.`
    return total;
}

console.log(totalVacationCost());