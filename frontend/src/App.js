
import React from 'react';
import { Homepage } from './pages/Homepage';
import { Recipes } from './pages/Recipes';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFoundPage } from './pages/NotFoundPage';
import {Routes, Route} from 'react-router-dom';

import {Cooker} from "./pages/Cooker";
import RecipeUploader from "./pages/RecipeUploader";
import {Favorites} from "./pages/Favourites";


// import {Box} from '@material-ui/core';
// import {useState, useEffect} from 'react'

function App() {
  
  // const [backendData, setbackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/recipes").then(
  //     response => response.json()
  //   ).then(data => {
  //     setbackendData(data)
  //     }
  //   )
  // }, [])
  
  return (
    <div className="App">

      {/* <Box>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ) : (backendData.map((user, i) => (
          <p>{user}</p>
        ))
        )}
      </Box> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Cooker" element={<Cooker />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipeUploader" element={<RecipeUploader />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
