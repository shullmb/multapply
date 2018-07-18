import React, { Component } from 'react';
import axios from 'axios';

class GroupAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFieldChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/groups', {
      name: this.state.name,
      ownerId: this.props.user._id
    }).then( results => {
      this.props.refresh();
      console.log(results)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Group Name: 
            <input type="text" name="name" onChange={this.onFieldChange} />
          </label>
          <button type="submit">Add Your Group</button>
        </form>
      </div>
    )
  }
}

export default GroupAdd;