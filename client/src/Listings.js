import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Listing from './Listing';

class Listings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: null
    }
    this.getListingData = this.getListingsData.bind(this);
  }


getListingsData() {
  axios.get('/listings').then( results => {
    this.setState({
      listings: results.data 
    });
  })
}

componentDidMount() {
  this.getListingsData();
}

render() {
  const listings = this.state.listings ? this.state.listings.map( listing => <Listing listing={listing} group={this.props.user.groupId}/>) : '';
  console.log("🔥🔥 GROUP ID", this.props.user.groupId)
  return (
        <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h2>Recommended for you:</h2>
          </Grid>
          <Grid class="listings" item xs={12}>
              {listings}
          </Grid>
        </Grid>
      </div>

    )
  }
}

export default Listings;