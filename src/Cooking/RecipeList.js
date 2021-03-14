import React from 'react'
import Recipe from './Recipe'

const RecipeList = (props) => {
    const {recipes,handleRecipeAdd,handleRecipeSelect} = props;
    return (
        <div className="recipe-list">
            <div>
                {
                    recipes.map( recipe => <Recipe 
                                key={recipe.id}
                                 {...recipe} 
                                 handleRecipeSelect={handleRecipeSelect}
                                 />)
                }
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button 
                    className="btn btn--primary" 
                        onClick={handleRecipeAdd}>
                        Add recipe</button>
            </div>
        </div>
    )
}

export default RecipeList

