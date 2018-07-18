import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import UpdateBio from './UpdateBio';
import UpdateApp from './UpdateApp';

class Profile extends Component {
  render() {
    const user = this.props.user;
    console.log(user)
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h2>PROFILE</h2>
        </Grid>
        <Grid item xs={12} sm={6} class="profile-pic">
          <img class="profile-pixxx" src="../img/smiley.png" /><br />
          <button class='pic-btn'>Update photo</button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>I am a human and this is my bio!</Paper>
          <UpdateBio  />
        </Grid>
        <Grid item xs={12}>
        <Paper>
            <ul>
              <li>Name: {user.name}</li>
              <li>Birthday: {moment(user.dateOfBirth).format("MMMM Do YYYY")}</li>
              <li>Phone number: {user.phone}</li>
              <li>Street: {user.street}</li>
              <li>City: {user.city}</li>
              <li>State: {user.state}</li>
              <li>Zip code: {user.zip}</li>
              <li>SSN: {user.socialSecurity ? "🤫🤫🤫-🤫🤫-" + user.socialSecurity.toString().split('').splice(5,4).join('') : ''}</li>
              <li>Current employer: {user.currentEmployer}</li>
              <li>Current monthly income: {user.currentMonthIncome}</li>
              <li>Credit score: {user.creditScore}</li>
            </ul>
        </Paper>
        <UpdateApp user={user} refresh={this.props.refresh} />
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Profile;