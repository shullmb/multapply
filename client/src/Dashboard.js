import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Dashboard extends Component {
  
  render() {
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h1>DASHBOARD</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="../img/smiley.png" /><br />
          <button class='bio-btn'>Edit photo</button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Hello, (NAME)!</h4><br />
          <button class='bio-btn'>Update profile</button>
          <p>Enter your rental application, credit score, and other info property managers need to know.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <button class='listings-btn'>Listings</button><br />
        <p>Search rental listings</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <button class='groups-btn'>Groups</button><br />
        <p>Find, create, or manage groups</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <button class='invite-btn'>Invite</button><br />
        <p>Invite other users to Multapply</p>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Dashboard;

