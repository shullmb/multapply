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
              <li>{moment(user.dateOfBirth).format("MMMM Do YYYY")}</li>
              <li>{user.phone}</li>
              <li>{user.street}</li>
              <li>{user.city}</li>
              <li>{user.state}</li>
              <li>{user.zip}</li>
              <li>{user.socialSecurity ? "🤫🤫🤫-🤫🤫-" + user.socialSecurity.toString().split('').splice(5,4).join('') : ''}</li>
              <li>{user.currentEmployer}</li>
              <li>{user.currentMonthIncome}</li>
              <li>{user.creditScore}</li>
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