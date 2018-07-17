import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class GroupMember extends Component {
  render() {
    return (
      <div>
        {this.props.member}
      </div>
    )
  }
}

export default GroupMember;