const ids = ['first', 'last', 'email', 'username', 'password'];
const submitButton = document.getElementById('submit');
const messageBox = document.getElementById('message');
const form = document.querySelector('form');

const url = 'http://localhost:8000/register'
const inputs = ids.map(id => document.getElementById(id));
console.log(inputs);

inputs.forEach(input => input?.addEventListener('input', handleChange));

form?.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const [first, last, email, username, password] = inputs.map((input) => input.value);
    const body = { first, last, email, username, password }
    if (inputs.includes(null)) return;
    e.preventDefault();
    
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body)
    }
    fetch(url, options)
    .then((res) => res.json())
    .then(res =>messageBox.innerHTML = res['message'])
    .catch(console.error)
    .finally(() => form.reset());
}

function handleChange(e) {
    submitButton.disabled = isAnyFieldEmpty();
}

function isAnyFieldEmpty() {
    return inputs.some(input => input.value === "")
}