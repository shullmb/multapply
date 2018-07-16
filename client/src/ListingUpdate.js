import React, { Component } from 'react';
import axios from 'axios';

class ListingUpdate extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`/listings/${this.props.listingId}`).then( results => {
      console.log(results.data)
      this.setState(results.data);
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('PRE PUT', this.state)
    axios.put(`/listings/${this.props.listingId}`, this.state).then( results => {
      console.log('RESULTS:', results.data);
    }).catch(err => {
      console.log(err)
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
          <input type="submit" value="Update Listing" />
        </form>
      </div>
    )
  }

}

export default ListingUpdate