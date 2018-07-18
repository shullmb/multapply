import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Listing from './Listing';

class Listings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: null
  }
  this.getListingInformation = this.getListingInformation.bind(this);
}

getListingInformation() {
  let listingId="";
  axios.get(`/listings/${listingId}`).then( results => {
    console.log(results)
    this.setState({
      listing: results.data
    })
  })
}

componentDidMount() {
  this.getListingInformation()
}

render() {
    console.log(this.state.listings)
    const listings = this.state.listings ? this.state.listings.map ( listing => <Listing listing={listing} />) : ''
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper><h2>LISTINGS</h2></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>{listings}</Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Listings;