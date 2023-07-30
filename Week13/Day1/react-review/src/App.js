import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
