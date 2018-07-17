import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import ListingForm from './ListingForm';
import Profile from './Profile';
import Listings from './Listings';
import Groups from './Groups';
import HeroBanner from './HeroBanner';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null
    }
    // bindings
    this.liftTokenToState = this.liftTokenToState.bind(this);
    this.logout = this.logout.bind(this);
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    localStorage.removeItem('mernToken');
    this.setState({
      token: '',
      user: null
    })
  }

  checkForLocalToken() {
    let token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined') {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      axios.post('/auth/me/from/token', {
        token
      }).then(results => {
        localStorage.setItem('mernToken', results.data.token);
        this.setState({
          token: results.data.token,
          user: results.data.user
        })
      }).catch( err => console.log(err));
    }
  }

  componentDidMount() {
    this.checkForLocalToken();
  }

  render() {
    let user = this.state.user;
    if (user) {
      return (
        <Router>
          <div>
            <Navbar logout={this.logout}/>
            <h1>MULTAPPLY</h1>
            <p>An application for applications</p>
            <Route path='/Dashboard' component={() => <Dashboard user={user} /> }  />
            <Route path='/ListingForm' component={ListingForm} />
            <Route path='/Profile' component={() => <Profile user={user} />}  />
            <Route path='/Listings' component={Listings}  />
            <Route path='/Groups' component={() => <Groups user={this.state.user} />}  />

            <Footer />
          </div>
        </Router>
      )  
    } else {
      return (
        <Router>
            <div>
              <Navbar liftTokenToState={this.liftTokenToState} logout={this.logout} />
                <HeroBanner />
                {/* <LandingInfo /> */}
              <Footer />
              </div>
        </Router>
      );
    }
  }
}

export default App;
