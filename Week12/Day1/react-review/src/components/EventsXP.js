// Exercise 2 : Events
// Instructions
// Part I:

// Create a new Functional component named Events.

// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.

// In the return, create a button that when clicked on, calls the clickMe function. 
// Use the onClick event handler.


// Part II:

// In the Events Functional component, in the return, create an input tag that has an onKeyDown event handler, 
// that listens to a function called handleKeyDown.

// keyEnter

// When you type something in the input field and press the ‘Enter key’, 
// the handleKeyDown function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:



// Part III:

// In the Events Functional component, using the state hook, 
// declare a state variable named isToggleOn and set it to true.

// In the return, create a button that has an onClick event that will 
// switch the state variable between ‘ON’ and ‘OFF’

// Create a function that will be called by the onClick event handler. 
// In the function you should toggle the value of the isToggleOn state variable.
import { useState } from 'react';


const EventsXP = () => {
    const alertClick = () => {
        alert("I was clicked!")
    }

    const handleKeyDown = (e) => {
        const value = e.target.value;
        console.log(e.key)
        if(e.key==="Enter"){
            alert(`the Enter key was pressed, your input is: ${value}`);
        }
    }


    const [isToggleOn, setIsToggleOn] = useState(true);


    const toggleState = () => {
      setIsToggleOn(prevState => !prevState);
    };

    return(
        <>
            <input onKeyDown={handleKeyDown} placeholder="Press the ENTER key"/>
            <button onClick={alertClick}>Click me!</button>
            <button onClick={toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    )
}

export default EventsXP;

