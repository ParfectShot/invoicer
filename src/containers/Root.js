import React from 'react';
import { Switch, Route } from 'react-router';
import Box from '@material-ui/core/Box';
import Login from './Login';
import Register from './Register';
import Copyright from '../components/Copyright';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Root = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Root;
