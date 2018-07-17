import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class GroupListing extends Component {
  render() {
    return(
      <div>
        {this.props.listing}
      </div>
    )
  }
}

export default GroupListing;