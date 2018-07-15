import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class App extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Router>
        <div>
          <button onClick={this.onOpenModal}>Login</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <form onSubmit={this.handleSubmit}>
                Email: <input type='email' value='' /><br />
                Password: <input type='password' value='' /><br />
                <input type='submit' value='Log In' />
              </form>
          </Modal>
          <button onClick={this.onOpenModal}>Signup</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <form onSubmit={this.handleSubmit}>
              Name: <input type='text' value='' /><br />
              Email: <input type='email' value='' /><br />
              Password: <input type='password' value='' /><br />
              <input type='submit' value='Sign Up' />
            </form>
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
