import React, {useContext} from 'react'
import Ingredient from './Ingredient';
import {AppContext} from './App';

function Recipe(props) {
    const {handleRecipeDelete,handleSelectedRecipeIdChange} = useContext(AppContext);
    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients
    } = props;
    return (
        <div className='recipe' >
            <div className="recipe__top-section">
                <h2 className="recipe__name"> {name} </h2>
                <div className="recipe__btn-container">
                    <button className="btn btn--primary" onClick={() => handleSelectedRecipeIdChange(id)} >Edit</button>
                    <button className="btn btn--danger" onClick={() => handleRecipeDelete(id)} >Delete</button>
                </div>
            </div>
            <div className="recipe__content">
                <div className="recipe__content-section">
                    <p className="recipe__label">CookTime: {cookTime} </p>
                </div>
                <div className="recipe__content-section">
                    <p className="recipe__label">Servings: {servings} </p>
                </div>
                <div className="recipe__content-section">
                    <p className="recipe__label">Instructions:</p>
                    <div className="recipe__list-container">
                            {instructions.map(instr => (<p> {instr} </p>))}
                    </div>
                </div>
                <div className="recipe__content-section">
                    <p className="recipe__label">Ingredients:</p>
                    <div className="recipe__list-container">
                           {
                               ingredients.map(ing => (<Ingredient {...ing}/>))
                           }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
