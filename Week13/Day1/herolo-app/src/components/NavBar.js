

import {Routes, Route, Link} from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/favorite">Favorite</Link>{" "}
    </nav>
    
    </>
  );
}

export default NavBar;

//1. How i should use NavBar and Routes
//2. Structure of components
//3. Where to store data from API
//4. How to add to favorites