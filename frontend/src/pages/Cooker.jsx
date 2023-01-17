import React from 'react'
import {CookerHandle} from "../components/CookerHandle";
import {Box, Paper} from "@material-ui/core";

export const Cooker = () => {
    return (
        <main>
            <Paper>
                <Box style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '120px'}}>
                    <CookerHandle/>
                </Box>
            </Paper>

        </main>
    );

}
