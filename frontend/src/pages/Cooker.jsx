import React from 'react'
import {CookerHandle} from "../components/CookerHandle";
import {Box, Paper} from "@material-ui/core";
import {AuthHeader} from "../components/AuthHeader";


export const Cooker = () => {
    return (
        <main>
            <AuthHeader/>
            <Paper>
                <Box style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '120px'}}>
                    <CookerHandle/>
                </Box>
            </Paper>

        </main>
    );

}
