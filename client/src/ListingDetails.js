import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class ListingDetails extends Component {
  render() {
    const listing = this.props.listing;
    return (
      <div>
        <Grid item xs={12} sm={6}>
          <Paper>
            <h1>{listing.title}</h1>
            <h3>{listing.street}</h3>
            <h3>{listing.city}, {listing.state} {listing.zip}</h3>
            <p>{listing.description}</p>
            <p>{listing.dateAvailable}</p>
            <p>{listing.numUnits} {listing.numUnits > 1 ? "units" : "unit"} available </p>
            <p>{listing.bedrooms} Bedrooms</p>
            <p>{listing.bathrooms} Bathrooms</p>
            <p>{listing.sqFeet}</p>
            <h4>Pets: dogs: {listing.dogs ? "OK" : "☹️"} cats: {listing.cats ? "OK" : "☹️"} other: {listing.otherPets ? "OK" : "☹️"}</h4>
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default ListingDetails;


