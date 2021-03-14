import React, {Component} from 'react';
import {ThemeContext} from '../App';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialCount
        }
    }

    render() {
        console.log('Render Counter');
        return (
            <ThemeContext.Consumer>
                {
                    style => (
                        <div>
                            <button style={style} onClick={this.changeCount.bind(this,-1)}>-</button>
                            <span> {this.state.count} </span>
                            <button style={style} onClick={this.changeCount.bind(this,1)} >+</button>
                       </div>
                    )
                }
            </ThemeContext.Consumer>
        );
    }

    changeCount(amount) {
        this.setState( prevState => ({count: prevState.count + amount}) );
    }

}

export default Counter;