import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

  const styles = {
    root: {
      flexGrow: 1,
    },
  };

  function Footer(props) {
    const { classes } = props;
    return (
        <AppBar class="footer" position="static" color="default">
          <Grid container justify='center' alignItems='center' alignContent='center'>
            <Grid item xs={2}>
              <Link to="/about">About</Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/contact">Contact</Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/careers">Careers</Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/Dashboard">Dashboard</Link>
          </Grid>
          </Grid>
        </AppBar>
    );
  }

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

