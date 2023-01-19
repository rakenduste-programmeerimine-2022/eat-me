import React from 'react'
import {LoginForm} from "../components/LoginForm";
import {Box, Paper} from "@material-ui/core";
import {Header} from "../components/Header";

export const Login = () => {
  return (
      <main>
        <Paper>
          <Header/>
          <Box style={{display:'flex', justifyContent:'space-evenly', marginTop:'120px'}}>
            <Box component="img"
                 style={{
                   height:'600px',
                   width: '350px'
                 }}
                 alt="Registration page big image"
                 src='FoodBag.svg'
            />
            <LoginForm/>
          </Box>
        </Paper>
      </main>
  )
}
