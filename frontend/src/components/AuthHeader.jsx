import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/LogoBurger.svg'
import Button from '@material-ui/core/Button'
import {AppBar, Container, Toolbar, IconButton, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'



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


export const AuthHeader = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.logoButton}>
                        <Link to="/auth" ><img src={logo} height={80} alt='logo' /></Link>
                    </IconButton>
                    <Box className={classes.links}>
                        <Typography style={{marginRight:'30px', marginLeft:'30px'}} variant="h6">
                            <Link to="/recipes" style={{textDecoration: 'none', color: 'black'}}>Recipes</Link>
                        </Typography>
                        <Typography style={{marginRight:'30px', marginLeft:'30px'}} variant="h6">
                            <Link to="/cooker" style={{textDecoration: 'none', color: 'black'}}>Cooker</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/favorites" style={{textDecoration: 'none', color: 'black'}}>Favorites</Link>
                        </Typography>
                    </Box>
                    <Box mr={3}>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button
                                variant = 'contained'
                                style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black', marginRight: '20px', width: '100px'}}
                            >
                                Sign out
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
