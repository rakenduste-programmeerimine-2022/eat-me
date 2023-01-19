import React from 'react'
import  {Box, Paper} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
import { RegisterForm } from '../components/RegisterForm';


export const Register = () => {
  return (
      <main>
        <Paper>
          <Box style={{display:'flex', justifyContent:'space-evenly', marginTop:'120px'}}>
            <Box component="img"
                 style={{
                   height:'600px',
                   width: '350px'
                 }}
                 alt="Registration page big image"
                 src='FoodBag.svg'
            />
            <RegisterForm/>
          </Box>
        </Paper>
      </main>
  )
}
