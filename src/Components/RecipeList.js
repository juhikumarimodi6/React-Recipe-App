import React from "react";
import Recipes from "./Recipes";
import './RecipeList.css'

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
                        url = "https://via.placeholder.com/100"
                        />
            })}
            {results.length === 0 && !loading ? <h1>No result found!</h1>: ""}
        </div>
    )
}

export default RecipeList;