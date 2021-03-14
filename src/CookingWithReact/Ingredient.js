import React from 'react'

function Ingredient({name,amount}) {
    return (
        <div className='ingredient' >
            <p>
                <span> {name} </span> : <span> {amount} </span>
            </p>
        </div>
    )
}

export default Ingredient
