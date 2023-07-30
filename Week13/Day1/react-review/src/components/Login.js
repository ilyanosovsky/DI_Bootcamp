import { useRef, useState } from 'react';

const Login = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const loginInfo = JSON.stringify({username: username, password: password});
        console.log(loginInfo);
        try {
            const data = await fetch("http://localhost:3030/login", {
                method: "POST",
                headers: {"content-type":"application/json"},
                body: loginInfo,
            });
            console.log(data);
            const parsedData = await data.json();
            console.log(parsedData);
        } catch (error) {
            console.log(error);
        }
    };

    
    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={submit} style={{
                                            display:"flex",
                                            flexDirection:'column',
                                            alignItems:"center"}}>
                <input ref={usernameRef} name="username"/>
                <input ref={passwordRef} name="password"/>
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;