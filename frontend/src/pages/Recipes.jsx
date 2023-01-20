import React, {useState} from 'react'
import {Box} from '@mui/material';
import RecipeList from "../components/RecipeList";
import axios from "axios";
import {AuthHeader} from "../components/AuthHeader";


export const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')

    React.useEffect(() => {
        axios.get('http://localhost:5000/recipe').then(({data}) => console.log(data))
    }, [])

    return (
      <Box>
         <AuthHeader/>
        <RecipeList/>
      </Box>
  )
}
