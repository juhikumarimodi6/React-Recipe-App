import React from "react";
import Recipes from "./Recipes";

const RecipeList = ({results, loading}) => {
    return (
        <div className='recipe-container'>
            {results.map((recipe, index) => {
                return <Recipes 
                        key = {index}
                        title = {recipe.title}
                        instructions = {recipe.instructions}
                        ingredients = {recipe.ingredients}
                        servings = {recipe.servings}
                        />
            })}
            {results.length === 0 && !loading ? <h1>No result found!</h1>: ""}
        </div>
    )
}

export default RecipeList;