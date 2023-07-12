const getData = async () => {
    try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        console.log(data);
        render(data);
    } catch (err) {
        console.log(err);
    }
};
getData();

const register = async () => {
    const first_name = document.getElementById('first-name').value;
    const last_name = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;
    const password2 = document.getElementById('psw-repeat').value;
    try {
        const res = await fetch('/api/profile', {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({first_name, last_name, email, password})
        });
        const data = await res.json();
        // getData();
        render(data);
    } catch (err) {
        console.log(err);
    }
}

const render = (arr) => {
    const html = arr.map((item) => {
        return `OK. Hello ${item.first_name} ${item.last_name}. Your ID is ${item.user_id}`;
    });
    document.getElementById('output-register').innerHTML = html.join('');
};