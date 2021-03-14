import React from 'react'

function Ingredient(props) {
    const {name,amount} = props;
    return (
        <div className='ingredient-grid'>
            <span> {name} </span>
            <span> {amount} </span>
        </div>
    )
}

export default Ingredient
