import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GroupUser from './GroupUser';

class GroupUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: ''
    }
    this.loadUsersIntoState = this.loadUsersIntoState.bind(this);
  }

  loadUsersIntoState() {
    axios.get('/users').then( results => {
      this.setState({
        allUsers: results.data
      })
    })
  }

  componentDidMount() {
    this.loadUsersIntoState();
  }

  render() {
    let allUsers = this.state.allUsers ? this.state.allUsers.map( userToAdd => <GroupUser user={this.props.user} groupId={this.props.user.groupId} userToAdd={userToAdd} key={`${userToAdd._id}`} />) : ''
    return (
      <div>
        {allUsers}
      </div>
    )
  }
}

export default GroupUsers;