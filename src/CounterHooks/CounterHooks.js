import React, {useState, useContext} from 'react';
import {ThemeContext} from '../App'

const counterHooks = ({initialCount}) => {
    const[state,setState] = useState({count:initialCount});
    const style = useContext(ThemeContext);
    const changeCount = amount => {
        setState( previousState => {
            return {...previousState,count: previousState.count + amount};
        } );
    }
    const textStyle = {
        color: style.backgroundColor
    }
    return (
        <div>
            <button style={style} onClick={changeCount.bind(this,-1)} >-</button>
            <span style={ textStyle } > {state.count} </span>
            <button style={style} onClick={changeCount.bind(this,1)} >+</button>
        </div>
    );
}

export default counterHooks;