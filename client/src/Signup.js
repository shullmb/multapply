import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '', 
      open: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onOpenSignupModal = this.onOpenSignupModal.bind(this)
    this.onCloseSignupModal = this.onCloseSignupModal.bind(this)
  }

  onOpenSignupModal = () => {
    this.setState({ open: true });
  };

  onCloseSignupModal = () => {
    this.setState({ open: false });
  };

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

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
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftTokenToState(result.data)
      this.setState({
        open: false,
      })
    }).catch( err => console.log(err) )
  }

  render() {
    const { open } = this.state;
    return (
      <div>
      <button class='signup-btn' onClick={this.onOpenSignupModal}>Signup</button>
      <Modal open={open} onClose={this.onCloseSignupModal} center>
      <form onSubmit={this.handleSubmit}>
        Name: <input type='text' value={this.state.name} onChange={this.handleNameChange} /><br />
        Email: <input type='email' value={this.state.email} onChange={this.handleEmailChange} /><br />
        Password: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
        <input type='submit' value='Sign Up' />
      </form>
      </Modal>
      </div>
    )
  }
}

export default Signup;