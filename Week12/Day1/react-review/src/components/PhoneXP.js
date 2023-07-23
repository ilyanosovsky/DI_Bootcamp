// Exercise 3 : Phone And Components
// Instructions
// Part I : Phone

// Create a new Functional Component named Phone. Use the state hook to create the following state variables:

// brand: "Samsung"
// model: "Galaxy S20"
// color: "black"
// year: 2020


// In the return of the Phone component, display the values of the state variables.


// Import the Phone component and display it in your App.js.

// Expected output (without the grey border):



// Part II : Change the Phone

// In the Phone component create a function named changeColor that updates the state variable to ‘blue’

// In the return, add a button with an onClick event that will call the changeColor function to change the color state variable.

// Expected output (without the grey border):when you click the button

import { useState } from 'react';

const PhoneXP = () => {

    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });

    const changeColor = () => {
        setPhone(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    return(
        <>
            <h1>My phone is a {phone.brand}</h1>
            <h3>It is a {phone.color} {phone.model} from {phone.year}</h3>
            <button onClick={changeColor}>Blue</button>
        </>
    )
}

export default PhoneXP;