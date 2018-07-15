import React, { Component } from 'react';
import './App.css';
import ListingForm from './ListingForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MULTAPPLY</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListingForm />
      </div>
    );
  }
}

export default App;
