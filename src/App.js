import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {
    const APP_ID = '07c563f5';
    const APP_KEY = '62ed51fc6e9de01f07f0e9f7610fef16';
   

    const [recipes, setRecipes] = useState([]);
    const [search,  setSearch] = useState('');
    const [query, setQuery] = useState('egg');

    useEffect(() => {
        getRecipes();
    }, [query]);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);

    };

    const updateSearch = e => {
        setSearch(e.target.value);
        
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className = "App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
                <button className="search-button" type="submit">Search</button>

            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe 
                key = {recipe.recipe.label}
                title = {recipe.recipe.label} 
                ingredients={recipe.recipe.ingredients}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                source={recipe.recipe.source}
                />
            ))}
            </div>
        </div>
    );
};

export default App;