import React from 'react'

function FormINput({handleCredentialsChange,label,...restProps}) {
    return (
        <div className='group' >
            <input 
                className='form-input'
                onChange={handleCredentialsChange}
                {...restProps}
            />
            {
                label? <label htmlFor={label}> {label} </label> : null
            }
        </div>
    )
}

export default FormINput
