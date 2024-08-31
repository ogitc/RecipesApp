import React from 'react';
import axios from 'axios';
import './RecipeItem.css';  

const RecipeItem = ({ recipe, fetchRecipes, setEditRecipe }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:3000/recipes/${recipe.id}`)
            .then(fetchRecipes)
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={() => setEditRecipe(recipe)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default RecipeItem;
