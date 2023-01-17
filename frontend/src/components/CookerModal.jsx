import React from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {DialogContent, DialogContentText, DialogTitle} from "@material-ui/core/";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        logoButton: {
            marginRight: theme.spacing(1)
        },
        links: {
            flexGrow: 1,
            display: 'flex',

        }
    }))
export const CookerModal = ({}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box mr={3}>
            <Button
                onClick={handleClickOpen}
                variant='contained'
                style={{
                    color: 'black',
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    marginRight: '20px',
                    width: '100px'
                }}
            >
                Login
            </Button>,
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Zalupa</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Login 4tobi pososat u Raimo i Normak v zopu zasunet
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CookerModal;