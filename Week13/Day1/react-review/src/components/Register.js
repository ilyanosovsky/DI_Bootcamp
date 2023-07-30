import { useRef, useState } from 'react';

const Register = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    async function submit (e) {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        try {
            const data = JSON.stringify({username: username, password: password});
            const res = await fetch ("http://localhost:3030/register", {
                method: "POST",
                headers: {"content-type":"application/json"},
                body: data,
            });
            console.log(res);
            const parsedData = await res.json();
            if (res.status === 200) {
                console.log(parsedData.message);
            } else {
                console.log(parsedData.error);
            }
        } catch (err) {
            console.log(err);
        }
    };


    return(
        <div>
            <h1>Register Page</h1>
            <form onSubmit={submit} style={{
                                            display:"flex",
                                            flexDirection:'column',
                                            alignItems:"center"}}>
                <input ref={usernameRef} name="username"/>
                <input ref={passwordRef} name="password"/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;