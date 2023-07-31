import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=> {
        getUsers()
    },[])

    const getUsers = async () => {
        try {
            const res =await axios.get('/users/users')
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <>
            <h1>My Users</h1>
            {
                users.map(item => {
                    return(
                        <div>
                            {item.id}{" "}
                            {item.email}{" "}
                            {item.password}
                        </div>
                    )
                })
            }
        </>
    )
};

export default Users;