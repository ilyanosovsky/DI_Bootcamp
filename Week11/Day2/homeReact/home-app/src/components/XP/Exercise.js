// Exercise 3 : HTML Tags In React
// Instructions
// PART I:

// In a separate Javascript file, named Exercise3.js, 
// create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.

import  "./Exercise.css";

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise = () => {
    return (
        <div>
            <h1 style={style_header}>This is a Header</h1>
            <p className='para'>This is a Paragraph</p>
            <a href='/'>This is a Link</a>
            <form>
                <strong>This is a Form</strong><br />
                <label for="name">Enter your name:</label>
                <input type="text" id="name" name="name" />
                <input type="submit" value="Submit" />
            </form>
            <img src='https://cdn.thenewstack.io/media/2022/06/1270f621-600b72f9-react-1024x680-1.png' alt='React Logo' />
            <ul>
                <strong>This is a list:</strong>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
};

export default Exercise;