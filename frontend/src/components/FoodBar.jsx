import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Meat" {...a11yProps(0)} />
                    <Tab label="Vegetables" {...a11yProps(1)} />
                    <Tab label="Milk Products" {...a11yProps(2)} />
                    <Tab label="Garnish" {...a11yProps(3)} />
                    <Tab label="Flavouring" {...a11yProps(4)} />
                    <Tab label="Fish and seafood" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">Meat Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        defaultValue="chicken"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="chicken" control={<Radio />} label="Chicken" />
                        <FormControlLabel value="beef" control={<Radio />} label="Beef" />
                        <FormControlLabel value="pork" control={<Radio />} label="Pork" />
                        <FormControlLabel value="bacon" control={<Radio />} label="Bacon" />
                        <FormControlLabel value="lamb" control={<Radio />} label="Lamb" />
                        <FormControlLabel value="duck" control={<Radio />} label="Duck" />
                        <FormControlLabel value="sausages" control={<Radio />} label="Sausages" />
                        <FormControlLabel value="mince" control={<Radio />} label="Mince" />
                    </RadioGroup>
                </FormControl>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">Vegetables Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        defaultValue="chicken"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="cabbage" control={<Radio />} label="Cabbage" />
                        <FormControlLabel value="greens" control={<Radio />} label="Greens" />
                        <FormControlLabel value="onions" control={<Radio />} label="Onions" />
                        <FormControlLabel value="pepper" control={<Radio />} label="Pepper" />
                        <FormControlLabel value="tomato" control={<Radio />} label="Tomato" />
                        <FormControlLabel value="cucumber" control={<Radio />} label="Cucumber" />
                        <FormControlLabel value="eggplant" control={<Radio />} label="Eggplant" />
                        <FormControlLabel value="potato" control={<Radio />} label="Potato" />
                        <FormControlLabel value="carrot" control={<Radio />} label="Carrot" />
                        <FormControlLabel value="beet" control={<Radio />} label="Beet" />
                    </RadioGroup>
                </FormControl>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">Milk products Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        defaultValue="chicken"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="milk" control={<Radio />} label="Milk" />
                        <FormControlLabel value="cream" control={<Radio />} label="Cream" />
                        <FormControlLabel value="butter" control={<Radio />} label="Butter" />
                        <FormControlLabel value="fermented" control={<Radio />} label="Fermented" />
                        <FormControlLabel value="yogurt" control={<Radio />} label="Yogurt" />
                        <FormControlLabel value="cheese" control={<Radio />} label="Cheese" />
                        <FormControlLabel value="custard" control={<Radio />} label="Custard" />
                        <FormControlLabel value="frozen" control={<Radio />} label="Frozen" />
                    </RadioGroup>
                </FormControl>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">Garnish Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        defaultValue="chicken"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="buckwheat" control={<Radio />} label="Buckwheat" />
                        <FormControlLabel value="potatoes" control={<Radio />} label="Potatoes" />
                        <FormControlLabel value="pasta" control={<Radio />} label="Pasta" />
                        <FormControlLabel value="rice" control={<Radio />} label="Rice" />
                        <FormControlLabel value="green_salad" control={<Radio />} label="Green salad" />
                    </RadioGroup>
                </FormControl>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">Flavouring Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        defaultValue="chicken"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="basil" control={<Radio />} label="Basil" />
                        <FormControlLabel value="vegeta" control={<Radio />} label="Vegeta" />
                        <FormControlLabel value="mustard" control={<Radio />} label="Mustard" />
                        <FormControlLabel value="ginger" control={<Radio />} label="Ginger" />
                        <FormControlLabel value="qamis" control={<Radio />} label="Qamis" />
                        <FormControlLabel value="cardamom" control={<Radio />} label="Cardamom" />
                        <FormControlLabel value="curry" control={<Radio />} label="Curry" />
                        <FormControlLabel value="coriander" control={<Radio />} label="Coriander" />
                        <FormControlLabel value="bay_leaf" control={<Radio />} label="Bay leaf" />
                    </RadioGroup>
                </FormControl>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <FormControl>
                    <FormLabel id="row-radio-buttons-group-label">Fish and Seafood Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        defaultValue="chicken"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="fishes" control={<Radio />} label="Fishs" />
                        <FormControlLabel value="squid" control={<Radio />} label="Squid" />
                        <FormControlLabel value="shrimp" control={<Radio />} label="Shrimps" />
                        <FormControlLabel value="crab" control={<Radio />} label="Crab" />
                        <FormControlLabel value="mussels" control={<Radio />} label="Mussels" />
                        <FormControlLabel value="octopus" control={<Radio />} label="Octopus" />
                        <FormControlLabel value="oyster" control={<Radio />} label="Oyster" />
                    </RadioGroup>
                </FormControl>
            </TabPanel>
        </Box>
    );
}
