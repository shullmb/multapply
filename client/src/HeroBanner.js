import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class HeroBanner extends Component {
  
  render() {
    return (
      <div>
        <Grid container justify='center' alignItems='center' alignContent='center'>
          <Grid item xs={12}>
          <div class="hero-banner">
            <img class="hero-image" src="../img/hero-image.jpg" />
          </div>
            </Grid>
            <Grid item xs={6}>
            <img class="rental-pic" src="../img/rental-pic.jpg" />
            </Grid>
            <Grid xs={6}>
              <p class="hero-blurb" >Renters can fill out their standard application and submit it to properties with ease. Roommates can create
                groups and apply together, rather than individually, saving you time and frustration.
              </p>
            </Grid>
            <Grid item xs={6}>
            <p class="hero-blurb">Property managers can post listings and view groups of applicants, avoiding the pain 
              of running credit checks and looking over multiple applications. 
            </p>
                </Grid>
                <Grid item xs={6}>
            <img class="prop-man-pic" src="../img/prop-man-pic.jpg" />
            </Grid>
            </Grid>
      </div>
    )
  }
}

export default HeroBanner