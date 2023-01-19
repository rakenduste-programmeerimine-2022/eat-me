import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import {IconButton} from "@material-ui/core";

export default function ModalCard(props) {
    return (
        <Box sx={{ minWidth: 250 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <img
                        /*props.picture*/
                        src="images/food_img/chicken.png"
                        width="150px"
                        height="150px"
                        alt="Chicken"
                    />
                    <CardContent>
                        <Box>
                            <Typography variant="h7" component="div">
                                {"Title: " + props.title}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Weight: " + props.weight}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Calories: " + props.calories}
                            </Typography>
                            <Typography variant="h7" component="div">
                                {"Formula: " + props.formula}
                            </Typography>

                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton style={{width:"10px", height:"10px"}} color="primary" aria-label="upload picture" component="label">
                            <FavoriteSharpIcon/>
                        </IconButton>
                        <Button size="small">Cooking steps</Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>


    );
}