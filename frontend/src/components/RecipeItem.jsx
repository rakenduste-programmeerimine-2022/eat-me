
import React from "react";
import { Card, Button, Typography, CardMedia, Box} from '@mui/material';
import PropTypes from 'prop-types';
// import axios from 'axios';

export const RecipeItem = (props) => {


    return (
        <div>
            <Card elevation={12} sx={{height: "450px", width: "80%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <Typography sx={{fontSize: "1.5rem", color: "grey"}}>{props.title}</Typography>
                {/*<CardMedia sx={{height: "50%", width: "100%"}} component="img" image={props.picture} />*/}
                <Typography sx={{paddingBottom: "10px", color: "grey"}}>{props.formula}</Typography>
            </Card>
        </div>
    )
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    formula: PropTypes.string.isRequired,
};