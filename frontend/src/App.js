
import React from 'react';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import { Recipes } from './pages/Recipes';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFoundPage } from './pages/NotFoundPage';
import {Routes, Route} from 'react-router-dom'


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
      <Header/>
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
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
