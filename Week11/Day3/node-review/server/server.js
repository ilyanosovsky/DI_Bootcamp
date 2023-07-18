
//First import
import express from "express"; //to create server
import cors from "cors";



//Second - consts variebles
const app = express(); //to create a server
const PORT = 3000;




//Third USE 
app.use(express.json()); //allows us to recieve json to server
app.use(cors()); //to fetch a data from file we want to access




const users = [
    {id:1, name: "Ivan", age: 29, country: "SPB"},
    {id:2, name: "Peter", age: 30, country: "USA"},
    {id:3, name: "Sam", age: 35, country: "Israel"},
];


const registerArray = [
    {username:"user1", password:"user123"},
    {username:"user2", password:"user123"},
]


//we creating a ROUTES 
app.get("/", (req,res) => {
    res.send("<h1>Hello Ivan!</h1>"); //sending data to our page
});

app.get("/users", (req,res) => {
    console.log("request received");
    res.json(users);
})

// app.get("/users/:userId", (req,res) => {
//     console.log("Request Received from userId Route");
//     const userId = req.params.userId;
//     console.log(userId);

//     res.json(req.params);
// })


app.get("/users/:userId", (req,res) => {
    console.log("Request Received from userId Route");
    const userId = Number(req.params.userId);
    const objId = users.find(item => item.id === userId);
    console.log(objId);
    if (objId){
        res.status(200).json(objId);
    } else {
        res.status(404).json("User not found");
    }
})


app.post("/register", (req,res) => {
    const {username, password} = req.body;
    const existingUser = registerArray.find((user) => user.username == username);

    if (existingUser) {
        res.status(400).json("Username already exists")
    } else {
        const newUser = {username, password};
        registerArray.push(newUser);
        res.status(200).json("Welcome, Registered Successfully")
        console.log(registerArray);
    }
    console.log("post request received in terminal");
})




//At the END listening to the PORT
app.listen(PORT || 3005, () => {
    console.log(`listening on port ${PORT}`);
}); //listening a server better be on the bottom