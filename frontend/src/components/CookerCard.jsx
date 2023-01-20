import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import {IconButton} from "@material-ui/core";
import RecipeModal from "./RecipeModal";

export default function ModalCard(props) {
    let description = props.description;
    let formulaOrig = props.formula;
    let formula = props.formula;
        formula = formula.slice(0,30) + "...";
    if(description.length > 12){
        description = description.slice(0, 30) + "..."
    }
    console.log(description)
    return (
        //sx={{ minWidth: 250 }}
        <Box style={{minWidth: 400, padding: "10px"}}>
            <Card variant="outlined">
                <React.Fragment>
                    <img
                        /*props.picture*/
                        src={props.picture}
                        width="150px"
                        height="150px"
                        alt={props.title}
                    />
                    <CardContent>
                        <Box>
                            <Typography variant="h7" component="div">
                                {"Title: " + props.title}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Weight: " + props.weight + "g"}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Calories: " + props.calories + " kkal"}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Formula: " + formula}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Description: " + description}
                            </Typography>

                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton style={{width: "10px", height: "10px"}} color="primary" aria-label="upload picture"
                                    component="label">
                            <FavoriteSharpIcon/>
                        </IconButton>
                        <RecipeModal title={props.title} description={props.description} formula={formulaOrig}/>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>


    );
};