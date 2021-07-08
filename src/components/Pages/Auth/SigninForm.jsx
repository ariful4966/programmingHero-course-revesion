import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SigninForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-password-input"
          label="First Name"
          type="text"
          autoComplete="current-password"
        />
      </div>
      <div>
        <TextField
          id="standard-password-input"
          label="Last Name"
          type="text"
          autoComplete="current-password"
        />
       </div>
       <div>
        <TextField
          id="standard-password-input"
          label="Username or Email"
          type="text"
          autoComplete="current-password"
        />
       </div>
       <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
       </div>
       <div>
        <TextField
          id="standard-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
       </div>
       
    </form>
  );
}
