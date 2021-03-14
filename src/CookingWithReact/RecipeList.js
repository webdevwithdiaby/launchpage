import React from 'react'
import Recipe from './Recipe'

function RecipeList({recipes,handleRecipeAdd}) {
    return (
        <div className='recipe-list' >
           {
               recipes.map(recipe => (<Recipe key={recipe.id} {...recipe} />))
           }
           <div className="recipe-list__btn-container">
               <button className="btn btn--primary" onClick={handleRecipeAdd} >Add New Recipe</button>
           </div>
        </div>
    )
}

export default RecipeList
