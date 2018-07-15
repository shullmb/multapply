import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
            <Navbar />
            <h1>MULTAPPLY</h1>
            <p>An application for applications</p>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
