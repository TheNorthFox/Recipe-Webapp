import React from 'react';

const Recipe = ({title,calories,image,ingredients,source,uri}) => {
    return (
     
<div style={{display: 'flex', flexDirection: 'row'}}>
<div class="card"  style={{flex: 1}}>
  <h5 class="card-header">{title}</h5>
  <div class="card-body">
    <img class="img-fluid rounded" src={image} alt=""/>
    <p class="card-text">
    {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
    </p>
    <div class="card-footer">
    <p>Calories = {calories}</p>
    <p>Source: {source}</p>
    <a href={uri} class="btn btn-success">Go Link</a>
    </div>
    
  </div>
</div>
</div>
    );
}

export default Recipe;