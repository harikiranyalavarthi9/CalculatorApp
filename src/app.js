import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <p>Hello Calculator App!</p>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));