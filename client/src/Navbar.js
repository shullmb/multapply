import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <Login liftTokenToState={ this.props.liftTokenToState} />{` `}
        <Signup liftTokenToState={this.props.liftTokenToState} />
        <a onClick={this.props.logout}>Log out</a>
      </div>
    )
  }
}

export default Navbar;