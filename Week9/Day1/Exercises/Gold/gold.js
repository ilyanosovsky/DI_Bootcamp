const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nameGiven = urlParams.get('name');
const lastGiven = urlParams.get('lastname');

const text = document.createTextNode(nameGiven + " " + lastGiven);
document.body.appendChild(text);

console.log(queryString);