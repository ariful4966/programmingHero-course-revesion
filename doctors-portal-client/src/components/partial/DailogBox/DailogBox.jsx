import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './DailogBox.scss';

import { useForm } from "react-hook-form";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


export default function DailogBox({ open, toggleBtn, category }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="dailogBox_area">
            <Dialog onClose={toggleBtn} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={toggleBtn}>
                    {category.title}
                </DialogTitle>
                <DialogContent dividers className="appoinmentBox">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={category.startTime} type="time" min={category.startTime} max={category.endTime} {...register("time", { required: true })} />
                        {errors.time && <span>This field is required</span>}

                        <input {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <input {...register("phone", { required: true })} />
                        {errors.phone && <span>This field is required</span>}

                        <input {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}

                        <input defaultValue={category.date} {...register("date", { required: true })} />
                        {errors.date && <span>This field is required</span>}

                        <DialogActions>
                            <Button autoFocus  type="submit" variant="contained" id="gradient_btn" color="primary">
                                Save changes
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
}