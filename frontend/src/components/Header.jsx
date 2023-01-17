import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/LogoBurger.svg'
import Button from '@material-ui/core/Button'
import {AppBar, Container, Toolbar, IconButton, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'


import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import {DialogTitle, DialogContent, DialogContentText} from "@material-ui/core/";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  logoButton: {
    marginRight: theme.spacing(1)
  },
  links: {
    flexGrow: 1,
    display: 'flex',
    
  }
}))



export const Header = () => {
  const classes = useStyles();

  return (
      <AppBar position="fixed" color="inherit">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.logoButton}>
              <Link to="/"><img src={logo} height={80} alt='logo'/></Link>
            </IconButton>
            <Box className={classes.links}>
              <Typography style={{marginRight: '30px', marginLeft: '30px'}} variant="h6">
                <Link to="/recipes" style={{textDecoration: 'none', color: 'black'}}>Recipes</Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>About</Link>
              </Typography>
            </Box>
            <Box mr={3}>
              <Link to="/login" style={{textDecoration: 'none'}}>
              <Button
                  variant='contained'
                  style={{
                    color: 'black',
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    marginRight: '20px',
                    width: '100px'
                  }}
              >
                Login
              </Button>
              </Link>
              <Link to="/register" style={{textDecoration: 'none'}}>
                <Button
                    variant='contained'
                    style={{
                      color: 'black',
                      backgroundColor: 'orange',
                      borderColor: 'black',
                      marginRight: '20px',
                      width: '100px'
                    }}
                >
                  Sign up
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
