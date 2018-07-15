import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <div>
        <Link to="/about">About</Link>{` `}
        <Link to="/contact">Contact</Link>{` `}
        <Link to="/careers">Careers</Link>
      </div>
    )
  }
}

export default Footer;