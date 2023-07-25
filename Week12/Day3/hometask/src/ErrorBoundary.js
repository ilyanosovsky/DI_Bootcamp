import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, errInfo){
        console.log(err);
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return (
                // <details style={{ whiteSpace: 'pre-wrap' }}>
                //     {this.state.err && this.state.err.toString()}
                //     <br />
                //     {this.state.errInfo.componentStack}
                // </details>
                <h1>Oops...</h1>
            )
        }
        return(
            this.props.children
        )
    }
}

export default ErrorBoundary;