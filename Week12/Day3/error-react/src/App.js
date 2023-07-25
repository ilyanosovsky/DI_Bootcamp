import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom';
// import {useState} from 'react';

const App = () => {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/about">About</Link>{" "}
      <Link to="/contact">Contact</Link>{" "}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact/:id' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
