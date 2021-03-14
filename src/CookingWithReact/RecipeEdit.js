import React from 'react'

function RecipeEdit({selectedRecipe,handleRecipeFieldChange}) {
    return (
        <div className='recipe-edit' >
            <form action="#" className="form">
                <div className="form__group">
                    <label htmlFor="name" className="form__label">
                        Name: 
                    </label>
                    <input 
                        type="text" 
                        className="form__input"
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={selectedRecipe.name}
                        onChange={(e) => handleRecipeFieldChange(e,selectedRecipe.id)}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="servings" className="form__label">
                        Servings: 
                    </label>
                    <input 
                        type="text" 
                        className="form__input"
                        id='servings'
                        name='servings'
                        value={selectedRecipe.servings}
                        onChange={(e) => handleRecipeFieldChange(e,selectedRecipe.id)}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="cookTime" className="form__label">
                        Cook Time: 
                    </label>
                    <input 
                        type="text" 
                        className="form__input"
                        id='cookTime'
                        name='cookTime'
                        placeholder='Cook time'
                        value={selectedRecipe.cookTime}
                        onChange={(e) => handleRecipeFieldChange(e,selectedRecipe.id)}
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="instructions" className="form__label">
                        Instructions: 
                    </label>
                    {
                        selectedRecipe.instructions.map( (instr,ind) => (
                            <div className="form__group">
                                <input 
                                key={ind}
                                type='text' 
                                value={instr}
                                id='instruction'
                                name='instruction'
                            />
                            </div>
                        ))
                    }
                </div>
                <div className="form__group">
                    <label htmlFor="ingredient" className="form__label">
                        Ingredients: 
                    </label>
                    {
                        selectedRecipe.ingredients.map( (ing,ind) => (
                            <div className='form__group' key={ing.id} >
                                <input 
                                type='text' 
                                value={ing.name}
                                id='name'
                                name='name'
                            />
                            <input 
                                type="text" 
                                className="form__input"
                                id='amount'
                                name='amount'
                                value={ing.amount}
                            />
                            </div>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}

export default RecipeEdit
