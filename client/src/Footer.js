import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
  
  render() {
    return (
      <div>
        <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
        <Link to="/about">About</Link>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Link to="/contact">Contact</Link>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Link to="/careers">Careers</Link>
        </Grid>
        </Grid>
      </div>
    )
  }
}

export default Footer;