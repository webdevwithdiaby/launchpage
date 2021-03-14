import React from 'react'
import Ingredient from './Ingredient';

function IngredientList({ingredients}) {
    const ingredientsElements = ingredients.map( ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient}  />
    });
    return (
        <div>
           {ingredientsElements} 
        </div>
    )
}

export default IngredientList
