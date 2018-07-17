import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class GroupListing extends Component {
  render() {
    return(
      <div>
        <Grid item xs={12} sm={6} key={this.props.listing.title}>
          <Paper>
            {this.props.listing.title}
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default GroupListing;