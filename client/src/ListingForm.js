import React, { Component } from 'react';
import axios from 'axios';

class ListingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyManager: '',
      title: '',
      description: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      available: '',
      dateAvailable: '',
      numUnits: '',
      bedrooms: '',
      bathrooms: '',
      sqFeet: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(listing) {
    axios.post({
      propertyManager: "",
      title: listing.title,
      description: listing.description,
      address: {
        street: listing.street,
        city: listing.city,
        state: listing.state,
        zip: listing.zip
      },
      available: listing.available,
      dateAvailable: listing.dateAvailable,
      numUnits: listing.numUnits,
      bedrooms: listing.bedrooms,
      bathrooms: listing.bathrooms,
      sqFeet: listing.sqFeet,
      pets: {
        dogs: false,
        cats: false,
        other: true
      }
    }).then( (err, results) => {
      err ? console.log(err) : console.log(results);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">title 
          <input name="title" onChange={this.handleChange} type="text" value={this.state.title} /> <br />
          </label>
          <label htmlFor="description">description 
          <input name="description" onChange={this.handleChange} type="text" value={this.state.description} /> <br />
          </label>
          <label htmlFor="street">street 
          <input name="street" onChange={this.handleChange} type="text" value={this.state.street} /> <br />
          </label>
          <label htmlFor="city">city 
          <input name="city" onChange={this.handleChange} type="text" value={this.state.city} /> <br />
          </label>
          <label htmlFor="state">state 
          <input name="state" onChange={this.handleChange} type="text" value={this.state.state} /> <br />
          </label>
          <label htmlFor="zip">zip 
          <input name="zip" onChange={this.handleChange} type="number" value={this.state.zip} /> <br />
          </label>
          <label htmlFor="available">available 
          <input name="available" onChange={this.handleChange} type="text" value={this.state.available} /> <br />
          </label>
          <label htmlFor="dateAvailable">dateAvailable 
          <input name="dateAvailable" onChange={this.handleChange} type="text" value={this.state.dateAvailable} /> <br />
          </label>
          <label htmlFor="numUnits">numUnits 
          <input name="numUnits" onChange={this.handleChange} type="number" value={this.state.numUnits} /> <br />
          </label>
          <label htmlFor="bedrooms">bedrooms 
          <input name="bedrooms" onChange={this.handleChange} type="number" value={this.state.bedrooms} /> <br />
          </label>
          <label htmlFor="bathrooms">bathrooms 
          <input name="bathrooms" onChange={this.handleChange} type="number" value={this.state.bathrooms} /> <br />
          </label>
          <label htmlFor="sqFeet">sqFeet 
          <input name="sqFeet" onChange={this.handleChange} type="number" value={this.state.sqFeet} /> <br />
          </label>
          <input type="submit" value="Add Listing" />
        </form>
      </div>
    )
  }

}

export default ListingForm
// pets.dogs: true
// pets.cats: false
// pets.other: true