import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

function RecipeEdit({recipe,handleRecipeChange,handleRecipeSelect}) {

    const handleChange = changes => {
        handleRecipeChange(recipe.id,{...recipe,...changes});
    }

    const handleIngredientChange = (ingredientId,updatedIngredient) => {
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex(ing => ing.id === ingredientId);
        newIngredients[index] = updatedIngredient;
        handleChange({ingredients:newIngredients});
    }

    const handleIngredientAdd = () => {
        const newIngredient = {
            id: Date.now().toString(),
            name:'',
            amount:''
        }
        handleChange({ingredients:[...recipe.ingredients,newIngredient]})
    }

    const handleIngredientDelete = id => {
        handleChange({ingredients:recipe.ingredients.filter(ing => ing.id !== id)});
    }

    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__remove-button-container' >
                <button 
                    className='btn recipe-edit__remove-button' 
                    onClick={()=> handleRecipeSelect(undefined)} >&times;</button>
            </div>
            <div className='recipe-edit__details-grid' >
                <label 
                    htmlFor="name" 
                    className='recipe-edit__label'
                    >name
                    </label>
                <input 
                    type="text" 
                    name='name' 
                    id='name' 
                    className='recipe-edit__input'
                    value={recipe.name}
                    onInput={(e) => handleChange({name:e.target.value})}
                    />
                <label 
                    htmlFor="cookTime" 
                    className='recipe-edit__label'
                    >Cook Time</label>
                <input 
                    type="text" 
                    name='cookTime' 
                    id='cookTime' 
                    className='recipe-edit__input'
                    value={recipe.cookTime}
                    onChange={(e) => handleChange({cookTime:e.target.value})}
                    />
                <label 
                    htmlFor="servings" 
                    className='recipe-edit__label'
                    >Servings</label>
                <input 
                    type="number" 
                    name='servings' 
                    id='servings'
                    min='1' 
                    className='recipe-edit__input'
                    value={recipe.servings}
                    onChange={(e) => handleChange({servings:Number(e.target.value)})}
                    />
                <label 
                    htmlFor="instructons" 
                    className='recipe-edit__label'
                    >Instructions</label>
                <textarea 
                    name="instructions" 
                    id="instructions" 
                    className='recipe-edit__input'
                    value={recipe.instructions}
                    onChange={(e) => handleChange({instructions:e.target.value})}
                    ></textarea>
            </div>
            <br/>
            <label className='recipe-edit__label' >Ingredients</label>
            <div className='recipe-edit__ingredient-grid' >
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                 <RecipeIngredientEdit handleIngredientChange={handleIngredientChange.bind(this)} key={ingredient.id} ingredient={ingredient} handleIngredientDelete={handleIngredientDelete.bind(this)} />
                ))}
                <div className='recipe-edit__add-ingredient-btn-container' >
                    <button className="btn btn--primary" onClick={()=> handleIngredientAdd()} >Add ingredient</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeEdit
