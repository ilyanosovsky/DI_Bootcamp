// const say = require('./greeting.js');
// const {greeting, a, hello} = require('./greeting.js');
// console.log(a);
// const name = "Ivan Kozin";

// a(name);
// a("John");

// greeting(name);

// console.log(say);
// console.log(say.a);
// console.log(say.greeting);

// hello("Ivan");


// const {getData} = require('./main.js');

// console.log(getData("https://jsonplaceholder.typicode.com/users"));







const {userInfo} = require('./main.js');

// console.log(userInfo());

userInfo().then((data) => {
    console.log(data);
});



