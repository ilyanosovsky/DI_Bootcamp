// Exercise 1 : Car And Components
// Instructions
// Part I : A Car Component

// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};

// In your React app create a new folder in the src path, name it Components. 
// It should contain a Functional Component named Car.js.

// In the Car.js component render a header with the carInfo model, for example This car is <model>.

// Import the Car.js component to the App.js.

// Part II : useState Hook

// Use the state hook in the Car component to add a color variable to the state.

// Return the color property, for example This car is <color> <model>.


// Part III : Garage

// Create another Functional Component inside your Components folder, called Garage.js.

// Use an attribute to pass a size to the Garage component, <Garage size="small" />.

// Use the Garage component inside the Car component and pass the size ‘small’. 
// The Garage component should render Who lives in my <size> Garage?


import { useState } from 'react';
import GarageXP from './GarageXP';

const CarXp = (props) => {

    const [color, setColor] = useState('red');

    return(
        <header>
            <GarageXP size="small"/>
            <h3>This car is {color} {props.model}</h3>
        </header>
    )
}

export default CarXp;





