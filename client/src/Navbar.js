import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
      <AppBar class="navbar" position="static" color="default">
          <Grid container justify='center' alignItems='center' alignContent='center'>
              <Grid item xs={2}>
                <Login liftTokenToState={ props.liftTokenToState} />
              </Grid>
              <Grid item xs={2}>
                <Signup liftTokenToState={props.liftTokenToState} />
              </Grid>
              <Grid item xs={2}>
                <a onClick={props.logout}>Log out</a>
              </Grid>
          </Grid>
      </AppBar>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
