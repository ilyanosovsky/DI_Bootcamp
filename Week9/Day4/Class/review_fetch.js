

//use the result of the promise --> THEN

function getUser () {
    fetch(`https://jsonplaceholder.typicode.com/users/1`) //promise
    .then(response => {
        if(response.ok) {
            // console.log(response.json());
            return response.json() //promise data as a result
        } else {
            throw new Error("PROBLEM"); //create the error
        }
    })
    .then(dataUser => {
        console.log(dataUser);
    })
    .catch(error => console.log("ERROR", error)) //use the error
}

getUser()


async function getUser () {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        if (response.ok) {
            const dataUser = await response.json();
            console.log(dataUser);
        } else {
            throw new Error("PROBLEM");
        }
    } catch (error) {
        console.log("ERROR");
    }
}

getUser()