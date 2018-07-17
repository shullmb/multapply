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
      group: null,
    }
    this.getGroupInformation = this.getGroupInformation.bind(this);
  }

  getGroupInformation() {
    // let groupId = this.props.user.groupId;
    let groupId = "5b4e2a6c1d44d6859ee221af";
    axios.get(`/groups/${groupId}`).then( results => {
      console.log(results)
      this.setState({
        group: results.data
      })
    })
  }

  componentDidMount() {
    this.getGroupInformation()
  }

  render() {
    console.log(this.state.group)
    // const members = this.state.group ? this.state.group.members.map( member => <GroupMember user={member} /> ) : ''
    const listings = this.state.group ? this.state.group.listings.map ( listing => <GroupListing listing={listing} />) : ''
    const groupName = this.state.group ? this.state.group.name : ''
    return (
      <div>
        <h1>Hello, {this.props.user.name}!</h1>
        <h3>{groupName}</h3>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <h3>THIS IS YOUR GROUP</h3>
            <Grid container spacing={24}>
              {/* {members} */}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>THESE ARE YOUR FUTUREHOMES</h3>
            <Grid container spacing={24}>
              {listings}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Groups;