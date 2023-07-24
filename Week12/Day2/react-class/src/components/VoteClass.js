import React, {Component} from 'react';

class VoteClass extends Component {
    constructor(){
        super();
        this.state = {
            languages: [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ],
        };
    }
    vote = (lang) => {
        const {languages} = this.state;
        lang.votes++;
        this.setState({languages:[...languages]});
    }

    render(){
        const {languages} = this.state;
        return (
            <div className="App">
              <header className="App-header">
                  {
                    languages.map((item,index) => {
                      return (
                        <div key={(index)}>
                          {item.name} {item.votes} <button onClick={() => this.vote(item)}>Add</button>
                        </div>
                      )
                    })
                  }
              </header>
            </div>
          );
    }
}

export default VoteClass;