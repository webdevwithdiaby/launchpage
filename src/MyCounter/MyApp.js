import React, {useState}  from 'react'
import MyCounter from './MyCounter';

export const ThemeContext = React.createContext();

function MyApp() {
    const [color,setColor] = useState('green');

    const changeColor = () => {
        setColor( prevColor => prevColor === 'green'? 'blue':'green');
    }
    return (
        <ThemeContext.Provider value={ {backgroundColor:color} }>
            <div style={ {backgroundColor:color} }>
                <h1 style={ {color:'#fff'} } >My Counter</h1>
                <MyCounter init={5} />
                <button onClick={changeColor.bind(this)}>Toggle theme</button>
            </div>
        </ThemeContext.Provider>
    )
}

export default MyApp

