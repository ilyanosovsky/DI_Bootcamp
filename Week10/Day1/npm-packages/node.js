const axios = require('axios');
const bcrypt = require('bcrypt');

const hashPassword = async (pass) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(pass, salt)
        console.log(hash);
    } catch (err) {
        console.log(err);
    }
}

hashPassword('abcdefg1')

const user = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

user();

//>> sudo npm i -g nodemon -- make it global

//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "nodemon node.js"
//   },

//>>npm start