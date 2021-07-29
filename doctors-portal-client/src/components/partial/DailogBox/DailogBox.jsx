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
import { connect } from 'react-redux';

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


function DailogBox({ open, toggleBtn, category, user }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const apData = {
            ...data,
            treatment: category.title,
            action: null,
            prescription: null
        }

        fetch('http://localhost:4000/appoinment', {
            method: 'POST',
            body: JSON.stringify(apData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

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

                        <input {...register("name", { required: true })} defaultValue={user.name} />
                        {errors.name && <span>This field is required</span>}

                        <input {...register("phone", { required: true })} placeholder="Your Phone" />
                        {errors.phone && <span>This field is required</span>}

                        <input {...register("email", { required: true })} defaultValue={user.email} />
                        {errors.email && <span>This field is required</span>}

                        <input defaultValue={category.date} {...register("date", { required: true })} />
                        {errors.date && <span>This field is required</span>}

                        <DialogActions onClose={toggleBtn}>
                            <Button autoFocus type="submit" variant="contained" id="gradient_btn" color="primary" >
                                Send
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
}
const mapStateToProps = state => {
    return { user: state.user }
}
const mapDispachToProps = {

}
export default connect(mapStateToProps, mapDispachToProps)(DailogBox)