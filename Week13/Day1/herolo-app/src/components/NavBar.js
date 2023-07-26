
import Favorite from './Favorite';
import Home from './Home';
import {Routes, Route, Link} from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/favorite">Favorite</Link>{" "}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorite' element={<Favorite />}/>
    </Routes>
    </>
  );
}

export default NavBar;