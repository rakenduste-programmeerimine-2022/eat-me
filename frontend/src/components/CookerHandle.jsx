import React, {useState} from 'react'
import {
    Box,
    Paper,
    Typography,
    Modal,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Dialog, DialogActions
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Slider from "@mui/material/Slider";
import { makeStyles } from '@material-ui/core/styles';
import {OrangeButton} from "./OrangeButton";
import FoodBar from "./FoodBar";
import ModalCard from "./ModalCard";
import CookerCard from "./CookerCard"
import * as PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 250,
        label: '250',
    },
    {
        value: 500,
        label: '500',
    },
    {
        value: 750,
        label: '750',
    },
    {
        value: 1000,
        label: '1000',
    },
];
const marksCT = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 90,
        label: '90',
    },
    {
        value: 120,
        label: '120',
    }
];


function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
}

function valuetext(value) {
    return `${value}°C`;

}function valuetext2(value) {
    return `${value}°C`;
}

const minDistance = 10;
export const CookerHandle = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const classes = useStyles();

    const[calories, setCalories] = useState(0)
    const[cookingTime, setCookingTime] = useState(0)

    const changeValue = (event, calories) => {
        setCalories(calories);
    };

    const changeCTValue = (event, cookingTime) => {
        setCookingTime(cookingTime);
    };
    const getCalories = (cal) => `${calories}`;

    const getCookingTime = (cookT) => `${cookingTime}`;

    //----------------------------------------------------------------------------------
    const [value1, setValue1] = React.useState([0, 500]);

    const handleChange1 = (event,newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    //----------------------------------------------------------------------------------    //----------------------------------------------------------------------------------
    const [value2, setValue2] = React.useState([15, 50]);

    const handleChange2 = (event,newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
        } else {
            setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
        }
    };
    //----------------------------------------------------------------------------------
    return (
        <main style={{width:'90%', height:'600px', marginTop:'10px'}}>
            <Paper style={{padding: '15px'}}>
                <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant="contained"
                            color="primary"
                            onClick={handleClickOpen}
                            style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black', height: '40px'}}>
                        New ingredient
                    </Button>
                    <Dialog fullWidth={true} maxWidth={"lg"} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                        <DialogTitle id="form-dialog-title">New ingredient event</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <FoodBar/>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained"
                                    color="primary"
                                    onClick={handleClose}
                                    style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black', height: '40px'}}>
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Box>
                        <Typography id="input-slider" gutterBottom>
                            Calories (per 100g)
                        </Typography>
                        <Box style={{ width: 250}}>
                            <Slider
                                getAriaLabel={() => "Minimum distance"}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                disableSwap
                                min={0}
                                max={1000}
                                marks={marks}
                            />
                        </Box>
                    </Box>
                    <Box className={classes.root}>
                        <Typography id="input-slider" gutterBottom>
                            Cooking time (min)
                        </Typography>
                        <Slider
                            getAriaLabel={() => "Minimum distance"}
                            value={value2}
                            onChange={handleChange2}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext2}
                            disableSwap
                            min={0}
                            max={100}
                            marks={marksCT}
                        />
                    </Box>
                </Box>
                <Box defaultValue='No ingredients found'>
                    {/*{props} //offered dishes*/}
                </Box>
            </Paper>
            <Box style={{display: 'flex', width:'100px'}}>
                <ModalCard title='Chicken' picture='' />
            </Box>
        </main>
    )
}