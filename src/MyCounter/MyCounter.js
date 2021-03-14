import React, {useContext,useState} from 'react'
import {ThemeContext} from './MyApp';

const MyCounter = ({init}) => {
    const [count,setCount] = useState(init);
    const style = useContext(ThemeContext);

    const changeCount = amount => {
        setCount( prevCount => prevCount + amount);
    }

    return (
        <div>
            <button style={style} onClick={changeCount.bind(this,-1)}>-</button>
            <span style={ {color:'white',backgroundColor:'yellow'} }> {count}  </span>
            <button style={style} onClick={changeCount.bind(this,1)}>+</button>
        </div>
    )
}

export default MyCounter
