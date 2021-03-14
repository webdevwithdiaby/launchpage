import React from 'react';
import './button.styles.css';

function Button({children,modifier,handler}) {
    return (
       <button className={`btn ${modifier}`} onClick={handler}  > {children} </button>
    )
}

export default Button
