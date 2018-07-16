import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Profile extends Component {
  
  render() {
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h1>DASHBOARD</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="../img/smiley.png" /><br />
          <button class='pic-btn'>Update photo</button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>I am a person looking for a home.</Paper>
          <button class='bio-btn'>Update bio</button>
        </Grid>
        <Grid item xs={12}>
        <Paper>
          Name: Human Person<br />
          Date of birth: 05/23/1988<br />
          Phone number: (555)-555-5555<br />
          Current address: 12345 Place St, Seattle, WA 98107<br />
          Previous address: 54321 Not Place St, Seattle, WA 98107<br />
          SSN: *********<br />
          Current employer: Beechers Cheese<br />
          Monthly income: $3000<br />
          Credit score: ***<br />
          References: Your Mom<br />
            </Paper>
        <button class='listings-btn'>Update application</button><br />
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Profile;