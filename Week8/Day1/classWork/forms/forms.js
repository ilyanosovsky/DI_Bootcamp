// const myForm = document.forms.contactform;
// const myFormTwo = document.forms[0];

// const inputUser = document.forms[0].username




// const myForm = document.forms[0];
// myForm.addEventListener("submit", getValuesForm)

// function getValuesForm(event) {
//     event.preventDefault(); //stop from refreshing
//     const valueUsername = event.target.username.value;
//     const valueAge = event.target.age.value;
//     console.log(valueAge, valueUsername);
// }

// const cityInput = document.querySelector('#city');
// cityInput.addEventListener('input', retrieveData);

// function retrieveData(event) {
//     console.log(event.target.value);
// }

// setTimeout(welcome, 1000); // function works after 1000 ms = 1s 

// function welcome() {
//     alert('hello');
// }

// const btn = document.querySelector('#btn');
// btn.addEventListener("click", welcome);

// function welcome() {
//     setTimeout(function () {
//         alert('welcome func')
//     }, 1000)
// }

const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');

startbtn.addEventListener("click", notify);
stopbtn.addEventListener("click", stopInterval);

let idInterval;

function notify () {
    idInterval = setInterval(function () {
        document.body.classList.toggle("toRed");
        console.log("to red");
    }, 1000)
}

function stopInterval() {
    alert("stopped");
    clearInterval(idInterval);
}