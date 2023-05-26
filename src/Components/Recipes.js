import React from "react";
import './Recipes.css'

const Recipes = ({title, instructions, ingredients, servings}) => {
    return (
        <div className="recipes">
               <img src="https://via.placeholder.com/100" className="food-image"/>
                <div className="recipe-details">
                <h2 className="title">{title}</h2>
                <div className="ingridients-container">
                    <div><b>Ingredients:</b></div>
                    <div>{ingredients}</div>
                </div>
                <div className="servings-container">
                    <div><b>Servings:</b></div>
                    <div>{servings}</div>
                </div>
                <div className="instructions-container">
                    <div><b>Instructions:</b></div>
                    <div>{instructions}</div>
                </div>
            </div>
        </div>
    )
}

export default Recipes;