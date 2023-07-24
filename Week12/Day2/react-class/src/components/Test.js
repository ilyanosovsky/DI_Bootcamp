import React from 'react';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Test',
            name: this.props.username,
        };
        console.log('constractor');
        // console.log('props =>', this.props);
    }

    componentDidMount = () => {
        console.log('componentDidMount');
    };

    componentWillUnmount= () => {
        alert("don't do that");
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('prevProps =>', prevProps)
        if(prevProps.username !== this.props.username){
        }
        
        if (prevState.title !== this.state.title){
            console.log('prevState =>', prevState);
        }
        // console.log('componentDidUpdate');
    }

    handleChange = (e) => {
        this.setState({title:e.target.value})
    }

    render(){

        console.log('render');
        console.log('props on render =>', this.props);

        return(
            <>
                <h1>{this.state.title}</h1>
                <input onChange={this.handleChange} />
            </>
        )
    }
}

export default Test;