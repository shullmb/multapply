import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class GroupMember extends Component {
  render() {
    return (
      <div>
        <Grid item xs={12} sm={6} key={this.props.member._id}>
          <Paper>
            {this.props.member}
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default GroupMember;