

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