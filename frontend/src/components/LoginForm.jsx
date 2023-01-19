import React from 'react'
import {Box, Typography, TextField, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Axios from 'axios'
// import PropTypes from 'prop-types';
// import {useForm} from "react-hook-form";


const useStyles = makeStyles((theme) => ({
    eatPhrase: {
        color: '#ff9800',
    },
    root: {
        borderColor: '#ff9800'
    }
}))


export const LoginForm = ({setToken}) => {

    const classes = useStyles()

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        console.log(data)
        try{
            Axios.post('http://localhost:5000/users/login', data)
                .then(res => {
                    if(res.data.status === 200){
                        // console.log(res.data.accessToken)
                        let token = res.data.accessToken;
                        console.log(token)
                        // localStorage.setItem('token', token)
                        setToken(token);
                        // return window.location = '/recipes'
                    }
                })
        } catch (e){
            console.log(e)
        }
    }


    return (
        <Box style={{width:'400px', height:'600px', marginTop:'70px'}}>
            <Box>
                <Typography variant='h5' style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginRight:'20px'}}>
                    Welcome to&nbsp;<Typography className={classes.eatPhrase} variant='h5'>Eat</Typography>Me!
                </Typography>
            </Box>
            <form onSubmit={onSubmit}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    style={{width: '375px' }}
                    // value={email}
                    // onChange={(e) => setEmail({ name: e.target.value })}
                    // inputProps={login('email')}
                />
                <br />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    style={{width: '375px' }}
                    // value={password}
                    // onChange={(e) => setPassword({ name: e.target.value })}
                    // inputProps={login('password')}
                />
                <br />
                <Box style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginTop:'20px', marginRight:'20px'}}>
                    <Button variant="contained"
                            color="primary"
                            type="submit"
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

// LoginForm.propTypes = {
//     setToken: PropTypes.func.isRequired
// }