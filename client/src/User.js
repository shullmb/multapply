import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

class User extends Component {
  constructor(props) {
    super(props)

    this.addToGroup = this.addToGroup.bind(this);
  }
  render() {
    const user = this.props.user;
    return (
      <div>
        <Grid item xs={12}>
          <h3>{user.name}</h3>
          <p>user.city
            <Button variant="outlined" onClick={this.addToGroup}>
              Add to my Group
            </Button>
          </p>
        </Grid>
      </div>
    )
  }

}