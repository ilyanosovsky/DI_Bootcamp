import './App.css';
import Parent from './components/Parent';
import {useState, createContext, useRef} from 'react';


export const AppContext = createContext();

const App = () => {
  const [text,setText] = useState('Hello Ivan');

  const inputPef = useRef();
  const headerRef = useRef();


  const handleRef = () => {
    console.log(inputPef.current.value);
    console.log(headerRef);
  }

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <AppContext.Provider value={{text, setText, a:"New text"}}>
          <Parent />
        </AppContext.Provider>
        <input ref={inputPef} onChange={handleRef} />
      </header>
    </div>
  );
}

export default App;
