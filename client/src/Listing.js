import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ListingDetails from './ListingDetails';

class Listing extends Component {
  render() {
    const listing = this.props.listing;
    return(
      <div>
        <Grid item xs={12} sm={4}>
          <Paper>
            <h3>{listing.title}</h3>
            <h4>{listing.city}</h4>
            <p>{listing.dateAvailable}</p>
            <p>{listing.bedrooms} Bedrooms, {listing.bathrooms} Bathrooms</p>
            <ListingDetails listing={listing} group={this.props.group}/>
          </Paper>
        </Grid>
      </div>
      )
  }
}

export default Listing;


