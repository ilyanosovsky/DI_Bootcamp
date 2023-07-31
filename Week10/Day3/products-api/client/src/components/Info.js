import { useContext, useEffect, useState} from "react";
import jwt_token from 'jwt-decode';
import { AppContext } from "../App";
import Users from "./Users";
import Auth from "../auth/Auth";

const Info = (props) => {
    const [email, setEmail] = useState('');
    const [id,setId] = useState('');
    const {token} = useContext(AppContext);

    useEffect(() => {
        if(token){
            const payload = jwt_token(token);
            console.log('payload => ',payload);
            setEmail(payload.email);
            setId(payload.userid)
        }
    },[]);
    return(
        <>
            My payload: {email} {" "} {id} <Auth> <Users /> </Auth>  
        </>
    );
};

export default Info;