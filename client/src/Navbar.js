import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Grid from '@material-ui/core/Grid';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
        <Login liftTokenToState={ this.props.liftTokenToState} />{` `}
        </Grid>
        <Grid item xs={6} sm={3}>
        <Signup liftTokenToState={this.props.liftTokenToState} />
        </Grid>
        <Grid item xs={6} sm={3}>
        <a onClick={this.props.logout}>Log out</a>
        </Grid>
        </Grid>
      </div>
    )
  }
}

export default Navbar;