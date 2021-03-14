import React, {useContext} from 'react'
import IngredientList from './IngredientList';
import {AppContext} from './CookingApp';

function Recipe(props) {
    const {handleRecipeDelete} = useContext(AppContext);
    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingredients,
        handleRecipeSelect
    } = props;
    
    return (
        <div className="recipe">
            <header className="recipe__header">
                <h3 className="recipe__title"> {name} </h3>
                <div className="recipe__header-buttons">
                    <button className="btn btn--primary mr-1" onClick={()=> handleRecipeSelect(id)}> Edit </button>
                    <button className='btn btn--danger' onClick={()=> handleRecipeDelete(id)} > Delete </button>
                </div>
            </header>
            <main className="recipe__content">
                <div className="recipe__row">
                    <span className="recipe__label">Cook Time:</span>
                    <span className="recipe__value"> {cookTime} </span>
                </div>
                <div className="recipe__row">
                    <span className="recipe__label">Servings:</span>
                    <span className="recipe__value"> {servings} </span>
                </div>
                <div className="recipe__row">
                    <span className="recipe__label">Instructons</span>
                    <div className="recipe__value recipe__value--indented recipe__instructions">
                        {instructions}
                    </div>
                </div>
                <div className="recipe__row">
                    <span className="recipe__label">Ingredients</span>
                    <div className="recipe__value recipe__value--indented">
                        <IngredientList  ingredients={ingredients} />
                    </div>
                </div>
            </main>
            <footer className="recipe__footer">

            </footer>
        </div>
    )
}

export default Recipe
