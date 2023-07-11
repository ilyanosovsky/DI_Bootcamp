// const fs = require('fs').promises;

// //promises

// const read = async () => {
//     try {
//         const data = await fs.readFile('info.json', 'unt-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// read();


// //update a file info.json

// fs.readFile('info.json', 'utf-8', (err, data) => {
//     if (err) return console.log(err);

//     const products = JSON.parse(data);
//     const index = products.findIndex((item) => item['id'] == 3);
//     products[index] = {
//         ...products[index],
//         price:760
//     }

//     fs.writeFile('info.json', JSON.stringify(products), 'utf-8', (err) => {
//         if (err) return console.log(err);
//     });
// });



// console.log('before');

//delete a file
// fs.unlink('text.txt', (err) => {
//     if (err) return console.log(err);
// });


// //append
// const product = {
//     "name" : "iPhone",
//     "price" : 500
// };

// fs.appendFile('info', JSON.stringify(product), 'utf-8', (err) => {
//     if (err) return console.log(err);
// })




// const product = {
//     "name" : "iPad",
//     "price" : 1000
// };

//write Files
// fs.writeFile('info', JSON.stringify(product), 'utf-8', (err) => {
//     if (err) return console.log(err);
// })



// read
// fs.readFile('info', 'utf-8', (err,data) => {    //async by default
//     if (err) return console.log(err);
//     console.log(data);
// });

// try {
//     const data = fs.readFileSync('info', 'utf-8');//can bee with out extantion
//      console.log(JSON.parse(data));
// } catch(err){
//     console.log(err);
// }

// console.log('after');

