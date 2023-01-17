import React from 'react';
import Button from "@material-ui/core/Button";

export const OrangeButton = ({handle}) => {
    return (
        <Button variant="contained"
                color="primary"
                onClick={handle}
                style = {{color: 'black', backgroundColor: 'orange', borderColor: 'black', height: '40px'}}>
            New ingredient
        </Button>
    );
};
