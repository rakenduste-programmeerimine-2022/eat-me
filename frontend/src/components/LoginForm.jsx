import React from 'react'
import {Box, Typography, TextField, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    eatPhrase: {
        color: '#ff9800',
    },
    root: {
        borderColor: '#ff9800'
    }
}))





export const LoginForm = () => {

    const classes = useStyles()

    return (
        <Box style={{width:'400px', height:'600px', marginTop:'70px'}}>
            <Box>
                <Typography variant='h5' style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginRight:'20px'}}>
                    Welcome to&nbsp;<Typography className={classes.eatPhrase} variant='h5'>Eat</Typography>Me!
                </Typography>
            </Box>
            <form>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    style={{width: '375px' }}
                />
                <br />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    style={{width: '375px' }}
                />
                <br />
                <Box style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginTop:'20px', marginRight:'20px'}}>
                    <Button variant="contained"
                            color="primary"
                            style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black', height: '40px'}}>
                        Sign in
                    </Button>
                </Box>
                <Box>
                    <Typography variant='h5' style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginRight:'20px', marginTop:'20px'}}>
                        No account?&nbsp;<Link to="/register" style={{textDecoration: 'none'}}><Typography className={classes.eatPhrase} variant='h5'>Register!</Typography></Link>
                    </Typography>
                </Box>
            </form>
        </Box>
    )
}
