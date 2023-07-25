import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Shop from './Shop';
import ErrorBoundary from '../ErrorBoundary';

const NavBar = (props) => {
    return(
        <>
        <nav>
          <Link to="/">Home</Link>{" / "}
          <Link to="/profile">Profile</Link>{" / "}
          <Link to="/shop">Shop</Link>{" / "}
        </nav>
            <Routes>
                <Route path='/' element={
                    <ErrorBoundary>
                        <Home />
                    </ErrorBoundary>
                }/>
                <Route path='/profile' element={
                    <ErrorBoundary>
                        <Profile />
                    </ErrorBoundary>
                }/>
                <Route path='/shop' element={
                    <ErrorBoundary>
                        <Shop />
                    </ErrorBoundary>
                }/>
            </Routes>
        </>
    )
};

export default NavBar;