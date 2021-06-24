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
import './CartModal.scss'

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

export default function CartModal(props) {
  const { cart, modal, setModal } = props;

  const handleClose = () => {
    setModal(!modal)
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modal}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Added Carts {cart.length}
      </DialogTitle>
      <DialogContent dividers>
        <div className="add_all_cart">
          {
            cart && cart.map(ct =>
              <div className="add_cart" key={ct.id}>
                <div className="cart_info">
                  <h4>{ct.title}</h4>
                  <h5>Quantity: {ct.quantity}</h5>
                  <h2>$ {(ct.price * ct.quantity).toFixed(2)}</h2>
                </div>
                <div className="cart-img">
                  <img src={ct.img.img1} alt="" />
                </div>
              </div>
            )
          }
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
