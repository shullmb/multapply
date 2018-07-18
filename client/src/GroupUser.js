import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class GroupUser extends Component {
  constructor(props) {
    super(props)
    this.addToGroup = this.addToGroup.bind(this);
  }

  addToGroup() {
    console.log(this.props.userToAdd)
    let groupId = this.props.groupId;
    let userToAdd = this.props.userToAdd;
    axios.put(`/groups/${groupId}/addUser`, {
      userId: userToAdd._id,
      groupId
    }).then( data => {
      console.log(data);
    })
  }

  render() {
    const userToAdd = this.props.userToAdd;
    return (
      <div>
        <Grid item xs={12}>
          <h3>{userToAdd.name}</h3>
          <p>{userToAdd.city}
            <Button variant="outlined" onClick={this.addToGroup}>
              Add to my Group
            </Button>
          </p>
        </Grid>
      </div>
    )
  }
}

export default GroupUser;