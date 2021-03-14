import React from 'react'

function RecipeEditElement() {
    return (
        <div className='recipe-edit-element' >
            <input 
                type="text" className="recipe-edit-element__input"
                name='instruction'
            />
        </div>
    )
}

export default RecipeEditElement
