import React, {useState} from 'react';
import data from './data';
import RecipeEdit from './RecipeEdit';
import RecipeList from './RecipeList';
import './style.css';

export const AppContext = React.createContext();

function App() {
    const [recipes,setRecipes] = useState(data);
    const [selectedRecipeId,setSelectedRecipeId] = useState();
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);
   

    const handleRecipeAdd = () => {
        const newRecipe = {
            id: Date.now().toString(),
            name: 'New name',
            cookTime: '1:60',
            servings: '2',
            instructions: ['Intr1','Instr2'],
            ingredients: [
                {
                    id:Date.now().toString(),
                    name:'a',
                    amount:'1tbs'
                },
            ]
        }
        setRecipes(prev => ([...prev,newRecipe]));
        setSelectedRecipeId(newRecipe.id);
    }
    const handleRecipeDelete = id => {
        setRecipes(prevRecipes => (prevRecipes.filter(r => r.id !== id)));
        if (selectedRecipeId === id) {
            setSelectedRecipeId(null);
        }
    }

    const handleSelectedRecipeIdChange = (id) => {
        const recipe = recipes.find(recipe => recipe.id === id);
        setSelectedRecipeId(recipe.id);
    }

    const handleRecipeFieldChange = (e,id) => {
        const recipe = recipes.find(recipe => recipe.id === id);
        const recipeIndex = recipes.findIndex(r => r.id === id);
        const newRecipe = {...recipe,[e.target.name]:e.target.value};
        setRecipes(
            prev =>  {
                prev[recipeIndex] = newRecipe;
                return [...prev];
            }
        );
    }

    

    const appContextValue = {
        handleRecipeDelete,
        handleSelectedRecipeIdChange
    };
    
    return (
        <AppContext.Provider value={appContextValue} >
            <div className='app' >
                <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} />
                {selectedRecipeId && <RecipeEdit selectedRecipe={selectedRecipe} handleRecipeFieldChange={handleRecipeFieldChange}  />}
            </div>
        </AppContext.Provider>
    )
}

export default App
