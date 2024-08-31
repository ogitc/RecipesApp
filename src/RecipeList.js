import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.css';

const RecipeList = ({ recipes, fetchRecipes, setEditRecipe }) => {
    

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="recipe-list">
            <h2>Recipes</h2>
            {recipes.map((recipe) => (
                <RecipeItem 
                    key={recipe.id} 
                    recipe={recipe} 
                    fetchRecipes={fetchRecipes} 
                    setEditRecipe={setEditRecipe} 
                />
            ))}
        </div>
    );
};

export default RecipeList;
