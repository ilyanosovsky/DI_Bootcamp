// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });



    
    const jsonStr = JSON.stringify(value);
    const text = document.createTextNode(jsonStr);
    document.body.appendChild(text)
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);