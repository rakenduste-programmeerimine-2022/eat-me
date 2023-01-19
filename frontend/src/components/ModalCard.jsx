import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import {IconButton} from "@material-ui/core";

export default function ModalCard(props) {
    return (
        <Box sx={{ minWidth: 250 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Box style={{display:"flex" ,justifyContent:"space-between"}}>
                            <Typography variant="h5" component="div">
                                {props.title}
                            </Typography>
                            <IconButton style={{width:"10px", height:"10px"}} color="primary" aria-label="upload picture" component="label">
                                <CloseSharpIcon/>
                            </IconButton>
                        </Box>
                        <img
                            /*src={props.picture} */
                            src="images/food_img/chicken.png"
                            width="150px"
                            height="150px"
                            alt="Chicken"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Zmakni menja</Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}