import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';
import ListingApply from './ListingApply';

class ListingDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const listing = this.props.listing;
    return (
      <div>
        <Button variant="raised" color="primary" onClick={this.onOpenModal}>View Details</Button>
        <Modal open={open} onClose={this.onCloseModal} >
          <Grid item xs={12}>
            <Paper>
              <h1>{listing.title}</h1>
              <ListingApply listing={listing} group={this.props.group}/>
              <img src="../img/purple_house.png" alt="{listing.description}" />
              <h3>{listing.street}</h3>
              <h3>{listing.city}, {listing.state} {listing.zip}</h3>
              <p>{listing.description}</p>
              <p>{listing.dateAvailable}</p>
              <p>{listing.numUnits} {listing.numUnits > 1 ? "units" : "unit"} available </p>
              <p>{listing.bedrooms} Bedrooms</p>
              <p>{listing.bathrooms} Bathrooms</p>
              <p>{listing.sqFeet}</p>
              <h4>Pets: dogs: {listing.dogs ? "🐶" : "☹️"} cats: {listing.cats ? "🐱" : "☹️"} other: {listing.otherPets ? "OK" : "☹️"}</h4>
            </Paper>
          </Grid>
        </Modal>
      </div>
    )
  }
}

export default ListingDetails;


