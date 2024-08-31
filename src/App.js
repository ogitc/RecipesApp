import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import axios from 'axios';
import './App.css';


function App() {
    const [editRecipe, setEditRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
      axios.get('http://localhost:3000/recipes')
          .then((response) => setRecipes(response.data))
          .catch((err) => console.error(err));
    };

    return (
        <div className="App">
            <h1>Recipe Management</h1>
            <RecipeForm fetchRecipes={fetchRecipes} editRecipe={editRecipe} />
            <RecipeList recipes={recipes} fetchRecipes={fetchRecipes} setEditRecipe={setEditRecipe} />
        </div>
    );
}

export default App;