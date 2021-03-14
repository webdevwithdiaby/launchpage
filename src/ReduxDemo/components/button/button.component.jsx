import React from 'react';
import './button.styles.css';

function Button({children,handler,...rest}) {
    return (
       <button className="btn" onClick={handler} {...rest} > {children} </button>
    )
}

export default Button
