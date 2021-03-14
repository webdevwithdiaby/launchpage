import React, {useState} from 'react'
import Counter from './Counter/Counter';
import CounterHooks from './CounterHooks/CounterHooks';

export const ThemeContext = React.createContext();

function App() {
    const [theme,setTheme] = useState('red');
    return (
        <ThemeContext.Provider value={ {backgroundColor:theme} }>
            Counter
            <Counter initialCount={0} />
            CounterHooks
            <CounterHooks initialCount={5} />
            <button onClick={() => {
                setTheme( prevTheme => {
                    return prevTheme === 'red'? 'blue': 'red';
                });
            }}>Change theme</button>
        </ThemeContext.Provider>
    )
}

export default App

