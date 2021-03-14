import React from 'react'

function FormInput({label,handler,...restProps}) {
    return (
        <div className='form__goup' >
            {label? <label className='form__label' > {label} </label> : null }
            <input 
                className="form__input"
                onChange={handler}
                {...restProps}
            />
        </div>
    )
}

export default FormInput
