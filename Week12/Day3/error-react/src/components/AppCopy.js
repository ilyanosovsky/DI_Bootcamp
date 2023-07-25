import './App.css';
import Child from './components/Child';
import {useState} from 'react';

const App = () => {
  // const [name, setName] = useState('Child');
  // const [price, setPrice] = useState('');
  // const [color, setColor] = useState('');
  // const [message, setMessage] = useState('');
  // const [go, setGo] = useState(false);

  const[forminput, setForminput] = useState({});

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //   setForminput({...forminput, [name]:value})
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(forminput);
    const form = e.target;
    //reading the form data
    const formData = new FormData(form);
    console.log("formdata => ", formData);

    formData.append('token', 'token');
    
    //pass the data to server backend
    try {
      const res = await fetch("/api/products/formdata", {method:"POST", body: formData});
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    };
    

    const query = new URLSearchParams(formData).toString();
    console.log("query => ",query);

    const formJson = Object.fromEntries(formData.entries());
    console.log("formJson => ",formJson);
    // fetch("/api", {method:"POST", headers:{'content-type':'applecation/json'}, body: JSON.stringify(formJson)});

  };
  return (
    <div className="App">
      <header className="App-header">
          {/* <Child title={title} changeTitle={setTitle}/> */}
          <form onSubmit={handleSubmit}>
            Name: <input name='name' /><br/>
            Price: {" "} <input name='price' /><br/>
            <select name='color' >
              <option value='red'>Red</option>
              <option value="green">Green</option>
              <option value='blue'>Blue</option>
            </select><br/>
            <textarea  name='message' /><br/>
            Go / No Go <input type='checkbox' name='go' /><br/>
            <input type='submit' value='submit' />
          </form>
      </header>
    </div>
  );
}

export default App;
