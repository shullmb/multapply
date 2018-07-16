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
          <h1>DASHBOARD</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="../img/smiley.png" /><br />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Hello, {this.props.user.name}!</h2><br />
          <Link to="/Profile">Update profile</Link>
          <p>Enter your rental application, credit score, and other info property managers need to know.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Link to="/Listings">Listings</Link>
        <p>Search rental listings</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Link to="/Groups">Groups</Link>
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

