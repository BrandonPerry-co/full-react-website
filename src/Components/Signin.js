import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        color: 'teal'
      },
    },
    signBtn: {
        background: 'teal',
        color: 'white', 
        padding: '5px 30px'
    },
    
  }));

function Signin() {
    const classes = useStyles();
    return (
        <div>
        <Container fixed className="signinContain">
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Username" />
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      
    </form>
    <Button className={classes.signBtn}>
        Sign In
      </Button>
        </Container>
        </div>
    )
}

export default Signin;
