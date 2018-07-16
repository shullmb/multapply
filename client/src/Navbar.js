
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    )
  }
}

export default Navbar;