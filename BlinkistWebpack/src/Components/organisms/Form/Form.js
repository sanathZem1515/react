import React, { useState } from 'react';
import CustomButton from '../../atoms/Button/TextButton';
import CustomInput from '../../atoms/Input/Input';
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});


const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);


const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);


const CustomForm = ({ variant, parentFunction }) => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        parentFunction();
        setOpen(false);
    };
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const image = "https://images.blinkist.com/images/books/5aa7bb21b238e10007af44aa/1_1/470.jpg";
    const handleSubmitClick = () => {

        const tempBook = {
            title, author, category, time, status: "explore", image
        };
        if (tempBook.author === "" || tempBook.title === "" || tempBook.category === "") {
            return alert("Please fill the details");
        }
        fetch('http://localhost:8086/books/', {
            method: 'POST',
            body: JSON.stringify(tempBook),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        parentFunction();
        window.location.reload();
    };

    return (
        <React.Fragment>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Book
                </DialogTitle>
                <DialogContent dividers>
                    <CustomInput variant={variant}
                        label="Title"
                        type="text"
                        value=""
                        onChange={event => setTitle(event.target.value)}
                        placeholder="Enter Title" data-testid="title"
                    />
                    <br /><br />
                    <CustomInput variant={variant}
                        label="Author"
                        type="text"
                        id="author"
                        value=""
                        onChange={event => setAuthor(event.target.value)}
                        placeholder="Enter Author Name"
                    />
                    <br /><br />
                    <CustomInput variant={variant}
                        label="Time"
                        type="number"
                        value=""
                        onChange={event => setTime(event.target.value)}
                        placeholder="Time"
                    />
                    <br /><br />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={event => setCategory(event.target.value)}
                            label="Category"
                            placeholder="Category">
                            <MenuItem value={"Entrepreneurship"}> Entrepreneurship</MenuItem>
                            <MenuItem value={"Politics"}>Politics</MenuItem>
                            <MenuItem value={"Science"}>Science</MenuItem>
                            <MenuItem value={"Education"}>Education</MenuItem>
                            <MenuItem value={"Economics"}>Economics</MenuItem>
                            <MenuItem value={"Motivation"}>Motivation</MenuItem>
                            <MenuItem value={"Health"}>Health</MenuItem>
                            <MenuItem value={"Communcation skills"}>Communcation skills</MenuItem>
                            <MenuItem value={"Relationships"}>Relationships</MenuItem>
                        </Select>
                    </FormControl>
                    <br /><br />
                    <DialogActions>
                        <CustomButton variant="contained" color="primary" name="submit" onClick={() => handleSubmitClick()} />
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default CustomForm;

