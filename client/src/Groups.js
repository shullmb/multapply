import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GroupMember from './GroupMember';
import GroupListing from './GroupListing';
import SearchUsers from './SearchUsers';

class Groups extends Component {
  constructor(props) {
    super(props)
    this.state = {
      group: null
    }
    this.getGroupInformation = this.getGroupInformation.bind(this);
  }

  getGroupInformation() {
    let groupId = this.props.user.groupId;
    axios.get(`/groups/${groupId}`).then( results => {
      console.log('AXIOS RESULTS:   ', results.data)
      this.setState({
        group: results.data
      })
    })
  }

  componentDidMount() {
    this.getGroupInformation()
  }

  render() {
    console.log('RENDER:  ',this.state)
    const members = this.state.group ? this.state.group.members.map( (member, i) => <GroupMember member={member} /> ) : ''
    const listings = this.state.group ? this.state.group.listings.map( (listing, i) => <GroupListing listing={listing} key={i} />) : ''
    const groupName = this.state.group ? this.state.groupName : ''
    return (
      <div>
        <h1>Hello, {this.props.user.name}!</h1>
        <h2>{groupName}</h2>
        <Button variant="outlined" color="primary"> 
          <Link to='/GroupUsers'>Add a Roommate</Link>
        </Button>
        <Button variant="outlined" color="primary"> 
          <Link to='/AddGroup'>Create Your Group</Link>
        </Button>
        <Button variant="outlined" color="primary"> 
          <Link to='/EditGroup'>Edit Your Group</Link>
        </Button>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <h3>These are your Roommates: </h3>
            <Grid container spacing={24}>
              {members}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>You have applied to these Properties</h3>
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