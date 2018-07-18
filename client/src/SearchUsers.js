import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SearchResults from './SearchResults';


class SearchUsers extends Component {
  state = {
    query: '',
    users: '',
    results: []
  }

  componentDidMount() {
    axios.get()
  }

  getInfo = () => {
    axios.get(`/users`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <SearchResults results={this.state.results} />
      </form>
    )
  }
}

export default SearchUsers;
