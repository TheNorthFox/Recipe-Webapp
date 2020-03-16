import React from 'react';
import './recipe.css';

const Recipe = ({title,calories,image,ingredients,source}) => {
    return (
        <div className='recipe'>
            <h1 className='title'>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories = {calories}</p>
            <img className="image" src={image} alt=""/>
            <p>Source:{source}</p>
            
        </div>
    );
}

export default Recipe;