import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class GroupMember extends Component {
  render() {
    return (
      <div>
        <Grid item xs={12}>
          <Paper>
            {this.props.member.name}
          </Paper>
        </Grid><br />
      </div>
    )
  }
}

export default GroupMember;