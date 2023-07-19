const registerButton = document.getElementById('register');
const userinput = document.getElementById('userinput');
const passwordinput = document.getElementById('passwordinput');
const message = document.getElementById('message');

async function register (e) {
    e.preventDefault();
    try {
        const data = JSON.stringify({username:userinput.value, password:passwordinput.value});
        const res = await fetch ("http://localhost:3000/register", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: data,
        });
        console.log(res);
        const parsedData = await res.json();
        if (res.status === 200) {
            message.innerText=parsedData.message;
        } else {
            message.innerText=parsedData.error;
        }
    } catch (err) {
        console.log(err);
    }
}

registerButton.addEventListener("click", register);



const userLogin = document.getElementById('userlogin');
const passwordLogin = document.getElementById('passwordlogin');
const loginButton = document.getElementById('login');
const loginMessage = document.getElementById('loginMessage');

async function login (e) {
    e.preventDefault();
    const loginInfo = JSON.stringify({username: userLogin.value, password: passwordLogin.value});
    console.log(loginInfo);
    try {
        const data = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: loginInfo,
        });
        console.log(data);
        const parsedData = await data.json();
        console.log(parsedData);
    } catch (error) {
        console.log(error);
    }
};

loginButton.addEventListener("click", login);