import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class HeroBanner extends Component {
  
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          <img class="hero-image" src="../img/hero-image.jpg" />
          <div class="hero-banner">
          <h1>Finding a new place sucks - <br />
          We can make it easier for you.</h1>
          <p>Seriously you guys this is some quality filler text right here</p></div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default HeroBanner