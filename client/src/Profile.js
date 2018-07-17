import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UpdateBio from './UpdateBio';
import UpdateApp from './UpdateApp';

class Profile extends Component {
  
  render() {
    const user = this.props.user;
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
          <UpdateBio  />
        </Grid>
        <Grid item xs={12}>
        <Paper>
            <ul>
              <li>{user.name}</li>
              <li>{user.dateOfBirth}</li>
              <li>{user.phone}</li>
              <li>{user.street}</li>
              <li>{user.city}</li>
              <li>{user.state}</li>
              <li>{user.zip}</li>
              <li>{user.socialSecurity}</li>
              <li>{user.currentEmployer}</li>
              <li>{user.currentMonthIncome}</li>
              <li>{user.creditScore}</li>
            </ul>
        </Paper>
        <UpdateApp user={user} />
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Profile;