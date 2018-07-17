import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class HeroBanner extends Component {
  
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          <div class="hero-banner">
            <img class="hero-image" src="../img/hero-image.jpg" />
          </div>
            </Grid>
            <Grid item xs={6}>
            <img class="rental-pic" src="https://www.fillmurray.com/200/300" />
            </Grid>
            <Grid item xs={6}>
              <p>Renter blurb, and whatnots, more words or whatever</p>
            </Grid>
            <Grid item xs={6}>
            <p>Property manager blurb and stuff, lots of words yo</p>
                </Grid>
                <Grid item xs={6}>
            <img class="prop-man-pic" src="https://www.fillmurray.com/200/300" />
            </Grid>
            </Grid>
      </div>
    )
  }
}

export default HeroBanner