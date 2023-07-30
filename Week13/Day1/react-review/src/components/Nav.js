import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav style={{
            display: 'flex',
            justifyContent: 'space-evenly'}}>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </nav>
    )
}

export default Nav;