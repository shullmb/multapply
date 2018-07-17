import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GroupMember from './GroupMember';
import GroupListing from './GroupListing';

class Groups extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupName: '',
      members: [],
      listings: [],
    }
    this.getGroupInformation = this.getGroupInformation.bind(this);
  }

  getGroupInformation() {
    // let groupId = this.props.user.groupId;
    let groupId = "5b4d04919ba0160471adef24";
    axios.get(`/groups/${groupId}`).then( results => {
      this.setState({
        groupName: results.data.name,
        members: results.data.members,
        listings: results.data.listings
      })
    })
  }

  componentDidMount() {
    this.getGroupInformation()
  }

  render() {
    const members = this.state.members.map( member => <GroupMember user={member} /> )
    const listings = this.state.listings.map ( listing => <GroupListing listing={listing} />)
    return (
      <div>
        <h1>Hello, {this.props.user.name}!</h1>
        <h3>{this.state.groupName}</h3>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <h3>THIS BE YOUR GROUP</h3>
            {members}
          </Grid>
          <Grid item xs={6}>
            <h3>THESE BE YOUR FUTUREHOMES</h3>
            {listings}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Groups;