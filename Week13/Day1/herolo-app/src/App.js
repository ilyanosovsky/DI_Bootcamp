import './App.css';
import NavBar from './components/NavBar';
import Favorite from './components/Favorite';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorite' element={<Favorite />}/>
    </Routes>
    <footer>all of pages</footer>
    </div>
  );
}

export default App;
