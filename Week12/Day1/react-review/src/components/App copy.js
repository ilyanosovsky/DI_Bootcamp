import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';


function App() {

  const [name,setName] = useState('iVan');
  const [users,setUser] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  
  console.log('name => ', name);

  const handleClick = async (name) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
    // name = "Kozin";
    // console.log(name);
    setName('Kozzzzzzzin');
  };


  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <Button variant="contained" onClick={() => handleClick() }>Click!</Button>
      <h1>{name}</h1>
      {
        users.map((item) => {
          return(
            <div key={item.id}>
                <h1>{item.name}</h1>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
