import React from 'react'
import {Box, Paper, Typography} from "@material-ui/core";
import {Header} from "../components/Header";


export const About = () => {
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
              <Paper style={{width: '600px', marginTop:'200px', height: '300px'}}>
                  <Typography >
                      The guest can explore the homepage and recipes, find the desired dish by searching. <br/> The logged in user can find suitable recipes based on the selected ingredients, sort them by calories and preparation time.<br/> The program outputs them from the database. For a suitable dish, it is possible to open the steps of preparation or mark as a favorite in order to quickly find them after.<br/>
                  </Typography>
                  <Typography variant='h5'>
                      Project authors
                  </Typography>
                  <Typography>
                      Nikita Kajalin @kajalinn<br/>
                      Andres Sikka @andressikka<br/>
                      Dmitri Šibin @DmitriShibin1
                  </Typography>
              </Paper>

          </Box>
        </Paper>
      </main>
  )
}
