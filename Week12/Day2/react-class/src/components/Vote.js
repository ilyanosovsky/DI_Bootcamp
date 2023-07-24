//Daily challenge

import {useState} from 'react';

const Vote = () => {

    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]);
    
      const vote = (lang) => {
        lang.votes++;
        setLanguages([...languages]); //clone the array to make it happend
      }
    
      return (
        <div className="App">
          <header className="App-header">
              {
                languages.map((item,index) => {
                  return (
                    <div key={(index)}>
                      {item.name} {item.votes} <button onClick={() => vote(item)}>Add</button>
                    </div>
                  )
                })
              }
          </header>
        </div>
      );
    }

export default Vote;