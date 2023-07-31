import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import { AppContext } from "../App";



const LoginRegister = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const {setToken} = useContext(AppContext);

    const navigate = useNavigate()

    const handleClick = async () => {
        if(props.title === 'Register'){
            try {
                const res = await axios.post('/users/register', {email, password});
                if(res.status === 200) {
                    console.log(res.data);
                    setMsg('');
                    navigate('/login');
                }
            } catch (err) {
                console.log(err);
                setMsg(err.response.data.msg)
            }
        } else {
            try {
                const res = await axios.post('/users/login', {email, password});
                if(res.status === 200) {
                    console.log(res.data);
                    setToken(res.data.token);
                    setMsg('');
                    navigate('/');
                }
            } catch (err) {
                console.log(err);
                setMsg(err.response.data.msg)
            }
        }
    }


    return(
        <>
            <h1>{props.title}</h1>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete="off">
                <TextField sx={{m:1}} id="email" type="email" label="Enter email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
                <TextField sx={{m:1}} id="password" type="password" label="Enter password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            </Box>
            <Button variant="contained" onClick={handleClick} >{props.title}</Button>
            <div>{msg}</div>
        </>
    )
}

export default LoginRegister;