import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Listing from './Listing';

class ListingApply extends Component {
  constructor(props) {
    super(props)
    this.applyForListing = this.applyForListing.bind(this);
  }

  applyForListing() {
    let listing = this.props.listing
    let groupId = this.props.group
    axios.put(`/listings/${listing._id}/apply`, {
      groupId
    }).then( result => {
      console.log(result);
    })
  }

  render() {
    return (
      <Button variant="raised" color="secondary" onClick={this.applyForListing}>
        Apply
      </Button>
    )
  }
}

export default ListingApply;