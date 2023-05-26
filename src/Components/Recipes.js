import React from "react";
import './Recipes.css'

const Recipes = ({title, instructions, ingredients, servings, url}) => {
    return (
        <div className="recipes">
               <img src={url} alt="food" className="food-image"/>
                <div className="recipe-details">
                <h2 className="title">{title}</h2>
                <div className="ingridients-container">
                    <div><b>Ingredients:</b></div>
                    <div className="ingredients">{ingredients}</div>
                </div>
                <div className="servings-container">
                    <div><b>Servings :</b></div>
                    <div className="servings">{servings}</div>
                </div>
                <div className="instructions-container">
                    <div><b>Instructions:</b></div>
                    <div className="instructions">{instructions}</div>
                </div>
            </div>
        </div>
    )
}

export default Recipes;