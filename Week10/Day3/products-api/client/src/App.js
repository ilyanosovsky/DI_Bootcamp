import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginRegister from './components/LoginRegister';
import Nav from './components/Nav';
import { createContext, useState } from 'react';
import Info from './components/Info';
import Auth from './auth/Auth';

export const AppContext = createContext(null);

function App() {
  const [token, setToken] = useState(null);
  return (
    <AppContext.Provider value={{token, setToken}}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/login" element={ <LoginRegister title='Login' /> }/>
          <Route path="/register" element={ <LoginRegister title='Register' /> }/>
          <Route path='/info' element={<Info />}/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
