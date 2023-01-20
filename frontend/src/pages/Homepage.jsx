import React from 'react'
import Button from '@material-ui/core/Button'
import {Container, Box, Typography, Paper, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
// import {Header} from "../components/Header";

import mainWallImage from '../images/mainWall_img.png'
import {Link} from "react-router-dom";
import Icon1 from "../images/HomePage_Icon1.svg"
import Icon2 from "../images/HomePage_icon2.svg"
import Icon3 from "../images/HomePage_Icon3.svg"

import {Header} from "../components/Header"

const useStyles = makeStyles((theme) => ({
  mainWall: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(14),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundOverlay: "rgba(0, 0, 0, .3)"
  },
  mainWallContent: {
    // position: "fixed", //text not scrolling with container
    padding: theme.spacing(3)
  },
  gridContainer: {
    height: "400px",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: "white",
  },
  gridItem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
}))

export const Homepage = () => {
  const classes = useStyles()

  return (
      <main>
         <Header/>
        <Paper
            className={classes.mainWall}
            style={{backgroundImage: `url(${mainWallImage})`, height: '450px'}} variant='elevation'>
          <Container>
            {/* <Box className={classes.overlay}> */}
            <Box className={classes.mainWallContent} style={{marginTop: '113px', marginRight: '40px', width: '300px'}}>
              <Typography
                  component="h1"
                  variant="h3"
                  style={{ color: 'black', marginTop: '100px'}}
                  gutterBottom>
                Create your own dish
              </Typography>
              <Link to="/about" style={{textDecoration: 'none'}}>
                <Button
                    variant = 'contained'
                    style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black'}}
                >
                  Learn more
                </Button>
              </Link>
            </Box>
            {/* </Box> */}
          </Container>
        </Paper>
          <Container>
            <Box>
              <Grid className={classes.gridContainer} container>
                <Grid className={classes.gridItem} item>
                  <Box className={classes.gridItemContent}>
                    <Box><img src={Icon1} height={64} alt='logo' /></Box>
                    <br/>
                    <Typography variant='h5'>Discover</Typography>
                    <br/>
                    <Typography component="h5">
                      Huge selection of <br/> recipes and cooking <br/> instructions
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.gridItem} item2>
                  <Box className={classes.gridItemContent}>
                    <Box><img src={Icon2} height={64} alt='logo' /></Box>
                    <br/>
                    <Typography variant='h5'>Build</Typography>
                    <br/>
                    <Typography component="h5">
                      Your own dish based on <br/> desired ingredients and <br/> calories count
                    </Typography>
                  </Box>
                </Grid>
                <Grid className={classes.gridItem} item3>
                  <Box className={classes.gridItemContent}>
                    <Box><img src={Icon3} height={64} alt='logo' /></Box>
                    <br/>
                    <Typography variant='h5'>Favorites</Typography>
                    <br/>
                    <Typography component="h5">
                      Add your favorite <br/> recipes to the cooking <br/> book
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
      </main>
  )
}
