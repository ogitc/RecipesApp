import React, { useState } from 'react';
import axios from 'axios';
import './RecipeForm.css';

const RecipeForm = ({ fetchRecipes, editRecipe }) => {
    const [name, setName] = useState(editRecipe ? editRecipe.name : '');
    const [ingredients, setIngredients] = useState(editRecipe ? editRecipe.ingredients : '');
    const [instructions, setInstructions] = useState(editRecipe ? editRecipe.instructions : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipe = {
            name,
            ingredients,
            instructions,
        };

        if (editRecipe) {
            axios.put(`http://localhost:3000/recipes/${editRecipe.id}`, recipe)
                .then(fetchRecipes)
                .catch((err) => console.error(err));
        } else {
            axios.post('http://localhost:3000/recipes', recipe)
                .then(fetchRecipes)
                .catch((err) => console.error(err));
        }
        setName('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{editRecipe ? 'Edit Recipe' : 'Add a New Recipe'}</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Ingredients: </label>
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            </div>
            <div>
                <label>Instructions: </label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            </div>
            <button type="submit">{editRecipe ? 'Update Recipe' : 'Add Recipe'}</button>
        </form>
    );
};

export default RecipeForm;
