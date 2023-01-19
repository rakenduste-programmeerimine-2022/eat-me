import React, {useState, useEffect} from 'react';
import {RecipeItem} from "./RecipeItem";
// import {RecipeItem} from "./RecipeItem";
import axios from "axios";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [skip, setSkip] = useState(0)

    // useEffect(async () => {
    //         try {
    //             const request = await fetch('http://localhost:5000/recipe%27)
    //             const recipesJson = await request.json()
    //             setRecipes([...recipes, ...recipesJson])
    //         } catch (e) {
    //             console.log('HUyNJA', e)
    //         }
    // }, [skip])

    React.useEffect(() => {
        axios.get('http://localhost:5000/recipe')
            .then(({data}) => setRecipes(data))

    }, [])


    const handleScroll = (e) => {
        const { offsetHeight, scrollTop, scrollHeight} = e.target

        if (offsetHeight + scrollTop === scrollHeight) {
            setSkip(recipes.length)
        }
    }



    return (
        <div className="recipes-list" style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '120px'}} onScroll={handleScroll}>
            {recipes.map((recipe) =>
                <RecipeItem title={recipe.title} formula={recipe.formula}/>
            )}
        </div>
    );
};

export default RecipeList;