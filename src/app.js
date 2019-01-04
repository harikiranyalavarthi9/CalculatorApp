import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0'
        }
        this.handleClick = this.handleClick.bind(this);
        this.clearText = this.clearText.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    handleClick(event) {
        this.setState({
            value: (this.state.value === '0') ? event.target.value:this.state.value+event.target.value
        });
    }

    clearText() {
        this.setState({
            value: '0'
        });
    }

    getValue() {
        this.setState({
            value: eval(this.state.value).toFixed(4)
        })
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <button onClick={this.handleClick} id="zero" value={0}>0</button>
                <button onClick={this.handleClick} id="one" value={1}>1</button>
                <button onClick={this.handleClick} id="two" value={2}>2</button>
                <button onClick={this.handleClick} id="three" value={3}>3</button>
                <button onClick={this.handleClick} id="four" value={4}>4</button>
                <button onClick={this.handleClick} id="five" value={5}>5</button>
                <button onClick={this.handleClick} id="six" value={6}>6</button>
                <button onClick={this.handleClick} id="seven" value={7}>7</button>
                <button onClick={this.handleClick} id="eight" value={7}>8</button>
                <button onClick={this.handleClick} id="nine" value={9}>9</button>
                <button onClick={this.handleClick} id="decimal" value={'.'}>.</button>
                
                <button onClick={this.getValue} id="equals" value={'='}>=</button>
                <button onClick={this.handleClick} id="add" value={'+'}>+</button>
                <button onClick={this.handleClick} id="subtract" value={'-'}>-</button>
                <button onClick={this.handleClick} id="multiply" value={'*'}>x</button>
                <button onClick={this.handleClick} id="divide" value={'/'}>/</button>
                <button onClick={this.clearText} id="clear" value={'AC'}>AC</button>
                <p id="display">{this.state.value}</p>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));