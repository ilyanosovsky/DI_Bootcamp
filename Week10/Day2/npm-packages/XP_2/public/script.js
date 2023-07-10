fetch('/users')
.then((res) => res.json())
.then((data) => {
    console.log(data);
    render(data);
})
.catch((e) => {
    console.log(e);
});

const render = (arr) => {
    const html = arr.map((item) => {
        return userJ
    });
    console.log(html);
    document.getElementById('root').innerHTML = html.join("");
};

function myFunction() {
    alert("Hello from JavaScript");
};