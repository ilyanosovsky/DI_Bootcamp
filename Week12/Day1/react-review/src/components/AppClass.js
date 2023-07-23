import React, {Component} from "react";

class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            name:'iVan',
            users:[]
        }
    }

    handleClick = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data);
            this.setState({users:data});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return(
            <>
            <button onClick={this.handleClick}>Click!</button>
                <h1>{this.state.name}</h1>
                {
                    this.state.users.map((item) => {
                        return(
                            <div key={item.id}>
                                <h1>{item.name}</h1>
                            </div>
                            
                        )
                    })
                }
            </>
        )
    }
}

export default AppClass;
