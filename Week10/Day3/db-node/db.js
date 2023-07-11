const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'surus.db.elephantsql.com',
        port: '5432',
        user: 'dpdpesuf',
        database: 'dpdpesuf',
        password: '3iDPYg5n9CC2fSa-6e8sCyk_fxVdkO1f'
    }
})

//insert
// db('products')
// .insert([
//     {name: 'product1', price: 1000},
//     {name: 'product2', price: 4000}
// ])
// .returning('id')
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })



//insert
// db('products')
// .insert([
//     {name: 'user1', price: 1000},
//     // {name: 'product2', price: 4000}
// ])
// .returning('id')
// .then((rows) => {
//     console.log(rows[0].id);
// })
// .catch((err) => {
//     console.log(err);
// })

//delete
// db('products')
// .where({id:5})
// .del()
// .returning('id')
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })



// //update
// db('products')
// .update(
//     {name: 'product1p111'},
// )
// .where({id:5})
// .returning('id')
// .then((rows) => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })

// >>[ { id: 5 } ]


//select
// db
// .select('id','name','price')
// .from('products')
// .then((rows) => {
//     console.log(rows);
// })

// db.raw('select id, name, price from products')
// .then((rows) => {
//     console.log(rows.rows);
// });