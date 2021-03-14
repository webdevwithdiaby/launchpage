import React from 'react'

function Button({children,handler,...restProps}) {
    return (
        <button className="btn" onClick={handler} >
            {children}
        </button>
    )
}

export default Button
