const express = require("express");
const ejs = require("ejs");
const  app = express();
//set template engine
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3001, ()=> {
    console.log(`run in ${process.env.PORT || 3001}`);
})
//templates
app.get('/', (req, res)=>{
    let user = {
        firstName: "John",
        lastName: "Doe",
    }
    let login = true;

    let students = {
        stu1:"mary",
        stu2:"kelly",
        stu3:"lura"
    }

    let arr = [
        {id:1, name:"iPhone", price:800},
        {id:2, name:"iPad", price:1000},
        {id:3, name:"iWatch", price:600},
    ]

    //send object to file
    res.render('index', {
        user,
        login,
        students,
        arr
    }); //go to folder View  and looks. /partial/...-> in view file
});
// default folder - views, all files ejs

app.get('/home', (req,res) => {
    res.render('home')
});

app.get('/about', (req,res) => {
    res.render('about')
});
