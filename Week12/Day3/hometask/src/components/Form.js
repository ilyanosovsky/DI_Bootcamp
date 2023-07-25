import {useState} from 'react';

const Form = () => {
    const [forminput, setForminput] = useState({});

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForminput({...forminput, [name]:value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(forminput);
    }

    return(
        <div>
    
          <h1>Sample FORM</h1>
          <hr/>
    
          <form onSubmit={handleSubmit}>
            <input name='fname' placeholder='First Name' onChange={(e)=>handleChange(e)}/><br/>
            <input name='lname' placeholder='Last Name' onChange={(e)=>handleChange(e)}/><br/>
            <input name='age' placeholder='Age' onChange={(e)=>handleChange(e)}/><br/>
            <input type="radio" value="Male" name="gender" onChange={(e)=>handleChange(e)}/> Male <br/>
            <input type="radio" value="Female" name="gender" onChange={(e)=>handleChange(e)}/> Female <br/>
            <h3>Select your destination</h3>
            <select name='destination' onChange={(e)=>handleChange(e)}>
              <option value="" disabled selected>--Please Select your Destination--</option>
              <option value='israel'>Israel</option>
              <option value="germany">Germany</option>
              <option value='russia'>Russia</option>
            </select><br/>
            <h3>Dietary restrictions:</h3>
            <input type='checkbox' name='nuts' onChange={(e)=>handleChange(e)}/>Nuts free<br/>
            <input type='checkbox' name='lactose' onChange={(e)=>handleChange(e)}/>Lactoze free<br/>
            <input type='checkbox' name='vegan' onChange={(e)=>handleChange(e)}/>Vegan free<br/>
            <input type='submit' value='submit' />
          </form>
          <hr/>
    
          <div>
            <h3>Entered information:</h3>
            Your name: {forminput.fname} {forminput.lname}<br/>
            Your age: {forminput.age} <br/>
            Your gender: {forminput.gender} <br/>
            Your destination: {forminput.destination} <br/>
            Your dietary restrictions: <br/>
            <br/>
            **Nuts free : {forminput.nuts ? 'Yes' : 'No'} <br/>
            **Lactose free : {forminput.lactose ? 'Yes' : 'No'} <br/>
            **Vegan meal : {forminput.vegan ? 'Yes' : 'No'} <br/>
    
          </div>
        </div>
    )
}

export default Form;