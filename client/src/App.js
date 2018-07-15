import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
            <Login />
          <br />

            <Signup />

        </div>
      </Router>
    );
  }
}

export default App;
