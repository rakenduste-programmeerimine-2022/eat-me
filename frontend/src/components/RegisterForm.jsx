import React, {useState} from 'react'
import {Box, Typography, TextField, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Axios from 'axios'
import {useForm} from "react-hook-form";
// import jwt from 'jwt-simple';



const useStyles = makeStyles((theme) => ({
    eatPhrase: {
        color: '#ff9800',
    },
    root: {
        borderColor: '#ff9800'
    }
}))


export const RegisterForm = () => {
    const classes = useStyles()



    const {register, getValues, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        delete data['confirm_password']
        // console.log(data)
        try{
            Axios.post('http://localhost:5000/users/register', data)
                .then(res => console.log(res.data))
        } catch (err){
            console.log(err)
        }
        alert("Success! Redirecting to login page.")
        window.location = '/login';
        // console.log(data)
        // console.log('otpravil')
    }

    return (
        <Box style={{width:'400px', height:'600px', marginTop:'70px'}}>
            <Box>
                <Typography variant='h5' style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginRight:'20px'}}>
                    Welcome to&nbsp;<Typography className={classes.eatPhrase} variant='h5'>Eat</Typography>Me!
                </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="fullName"
                    label="Full name"
                    name="fullName"
                    margin="normal"
                    autoFocus
                    {...register("fullName", {required: "Please enter full name"})}
                    error={!!errors?.fullName}
                    helperText={errors?.fullName ? errors.fullName.message : null}
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    style={{width: '375px' }}
                    // sx={{ //does not working
                    //     "& .MuiInputLabel-root": {color: 'green'},//styles the label
                    //     "& .MuiOutlinedInput-root": {
                    //         "& > fieldset": { borderColor: "#ff9800" },
                    //     },
                    // }}
                    variant="outlined"
                />
                <br />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
                    autoFocus
                    {...register("email", {required: "Please enter email",
                        pattern: {
                            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email adress"
                        }
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                    variant="outlined"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    style={{width: '375px' }}
                />
                <br />
                <TextField
                    id="password"
                    label="Password"
                    name="password"
                    variant="outlined"
                    autoFocus
                    {...register("password", {
                        required: "Please enter password",

                        minLength: {
                            value: 5,
                            message: "Password must be min 3 chars"
                        }
                    })}
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    style={{width: '375px' }}
                />
                <br />
                <TextField
                    id="confirm_password"
                    label="Confirm password"
                    name="conf_password"
                    variant="outlined"
                    autoFocus
                    {...register("confirm_password", {
                        required: "Please repeat password",

                        validate: (value) => {
                            const { password } = getValues();
                            return password === value || "Passwords should match"
                        }
                    })}
                    error={!!errors?.confirm_password}
                    helperText={errors?.confirm_password ? errors.confirm_password.message : null}
                    // value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    margin="normal"
                    style={{width: '375px' }}
                />
                <br />
                <Box style={{display: 'flex', justifyContent:'center', alignItem: 'center', marginTop:'20px', marginRight:'20px'}}>
                    <Button variant="contained"
                            color="primary"
                            type="submit"
                        // onClick={handleClick}
                            style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black', height: '40px'}}>
                        Create account
                    </Button>
                </Box>

            </form>
        </Box>
    )
}

















// const handleClick = (e) => {
//     e.preventDefault()
//     console.log(fullName)

//     const user = {
//         fullname: e.target.fullname.value,
//         email: e.target.email.value,
//         password: e.target.password.value,
//     }


// }