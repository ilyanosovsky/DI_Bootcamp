import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {

    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await axios.delete('/users/logout');
            if(res.status === 200) {
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div>
            <Stack spacing={2} direction={'row'}>
                <Button component={Link} to='/'>
                    Home
                </Button>
                <Button component={Link} to='/login'>
                    Login
                </Button>
                <Button component={Link} to='/register'>
                    Register
                </Button>
                <Button component={Link} to='/info'>
                    Info
                </Button>
                <Button onClick={logout}>
                    Logout
                </Button>
            </Stack>
        </div>
    )
}

export default Nav;