// document.getElementById("main-form").addEventListener("submit", checkForm);

// function checkForm(event) {
//     event.preventDefault();
//     var el = document.getElementById("main-form");
//     var name = el.name.value;
//     var password = el.password.value;
//     var repass = el.repass.value;
//     var state = el.state.value;

//     var fail = "";

//     if (name == "" || password == "" || repass == "" || state == "") {
//         fail = "Заполните все поля";
//     } else if (name.length <= 1 || name.length > 50) {
//         fail = "Введите корректное имя";
//     } else if (password != repass) {
//         fail = "Пароли не совпадают";
//     } else if (password.split('').length < 6) {
//         fail = "Пароль должен быть не менее 6 символов";
//     } 

//     if (fail != "") {
//         document.getElementById("error").innerHTML = fail;

//     } else {
//         alert("Все данные введены корректно");
//         window.location = "https://www.google.com/";   
//     }
// }
// var counter = 0;
// setInterval(function() {
//     counter++;
//     console.log("Proshlo sec:" + counter);
// }, 1000);

// var counter = 0;

// var id = setInterval(my_func,1000);

// function my_func() {
//     counter++;
//     console.log("Proshlo sec:" + counter);
//     if (counter == 3) {
//         clearInterval(id);
//     }
// }

setTimeout(function() {
    console.log("Hello");
}, 2000);
