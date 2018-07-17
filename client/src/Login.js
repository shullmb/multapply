import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      response: null,
      open: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onOpenLoginModal = this.onOpenLoginModal.bind(this)
    this.onCloseLoginModal = this.onCloseLoginModal.bind(this)
  }

  onOpenLoginModal = () => {
    this.setState({ open: true });
  };

  onCloseLoginModal = () => {
    this.setState({ open: false });
  };

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      if (result.data.hasOwnProperty('error')) {
        // the response we got was an error
        this.setState({
          response: result.data
        })
      } else {
        localStorage.setItem('mernToken', result.data.token)
        this.props.liftTokenToState(result.data)
        this.setState({
          response: null,
          open: false
        })
      }
    })
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button class='login-btn' onClick={this.onOpenLoginModal}>Login</button>
        <Modal open={open} onClose={this.onCloseLoginModal} center>
        <form onSubmit={this.handleSubmit}>
          Email: <input type='email' value={this.state.email} onChange={this.handleEmailChange} /><br />
          Password: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
          <input type='submit' value='Log In' />
        </form>
        </Modal>
      </div>
    )
  }
}

export default Login;
