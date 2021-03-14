import React, {useState,useEffect} from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import RecipeEdit from './RecipeEdit';

export const AppContext = React.createContext();

const CookingApp = () => {
    const [selectedRecipeId,setSelectedRecipeId] = useState();
    const [recipes,setRecipes] = useState(sampleRecipes);
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

    const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

    //Component loading 
    useEffect( () => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
    },[]);

    //When recipes is changed 
    useEffect( ()=> {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
    },[recipes]);

    const handleRecipeAdd = () => {
        const newRecipe = {
            id: Date.now().toString(),
            name:'',
            servings:1,
            cookTime: '',
            instructions:'.',
            ingredients: [
                {id:Date.now().toString(),name:'', amount:''}
            ],
        }

        setSelectedRecipeId(newRecipe.id);
        setRecipes(prevRecipes => ([...prevRecipes,newRecipe]));
    }

    const handleRecipeDelete = id => {
        if (selectedRecipeId !== null && selectedRecipeId === id) {
            setSelectedRecipeId(undefined);
        }
        setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    }


    const handleRecipeSelect = id => {
        setSelectedRecipeId(id);
    }

    const handleRecipeChange = (recipeId,updatedRecipe) => {
        const newRecipes = [...recipes];
        const index = newRecipes.findIndex(recipe => recipe.id === recipeId);
        newRecipes[index] = updatedRecipe; 
        setRecipes(newRecipes);
    }


    const appContextValues = {
        handleRecipeDelete
    };

    return (
        <AppContext.Provider value={appContextValues}>
            <RecipeList 
                recipes={recipes} 
                handleRecipeAdd={handleRecipeAdd.bind(this)}
                handleRecipeDelete={handleRecipeDelete}
                handleRecipeSelect={handleRecipeSelect} />
            {selectedRecipe && <RecipeEdit recipe={selectedRecipe} handleRecipeChange={handleRecipeChange.bind(this)} handleRecipeSelect={handleRecipeSelect} />}    
        </AppContext.Provider>
    );
}

const sampleRecipes = [
    {
        id: 1,
        name: 'Plain chicken',
        servings: 3,
        cookTime: '1:45',
        instructions: "1. Put salt on Chicken \n 2. Put Chicken in oven \n 3. Eat chicken ",
        ingredients: [
            {
                id:1,
                name:'Chicken',
                amount:'2 Pounds',
            },
            {
                id:2,
                name:'Salt',
                amount:'1 Tbs',
            },
        ],
    },
    {
        id: 2,
        name: 'Plain pork',
        servings: 5,
        cookTime: '0:45',
        instructions: "1. Put paprika on pork \n 2. Put pork in oven \n 3. Eat pork ",
        ingredients: [
            {
                id:1,
                name:'Pork',
                amount:'3 Pounds',
            },
            {
                id:2,
                name:'Paprika',
                amount:'2 Tbs',
            },
        ],
    },
];

export default CookingApp;