import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Profile';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  
  render() {
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h2>DASHBOARD</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div class="profile-pic">
          <img class="profile-pixxx" src="../img/smiley.png" /><br />
          <h3>Hello, {this.props.user.name}!</h3><br />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Link to="/Groups">Groups</Link>
        <p>Find, create, or manage groups</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div class="update-profile">
          <Link to="/Profile">Update profile</Link>
          <p>Edit rental application and bio</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Link to="/Listings">Listings</Link>
        <p>Search rental listings</p>
        </Grid>
      </Grid>
    </div>
    )
  }
}
  
export default Dashboard;

