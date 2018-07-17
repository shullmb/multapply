import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class UpdateApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: '',  //needs edits
      open: false
    }
    this.handleAppChange = this.handleAppChange.bind(this)
    this.onOpenAppModal = this.onOpenAppModal.bind(this)
    this.onCloseAppModal = this.onCloseAppModal.bind(this)
  }

  onOpenAppModal = () => {
    this.setState({ open: true });
  };

  onCloseAppModal = () => {
    this.setState({ open: false });
  };

  handleAppChange(e) {
    this.setState({
      bio: e.target.value //needs edits
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/users/app', {
      bio: this.state.bio
      /// above line needs to be corrected to update app information
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
        <p>{(this.state.response) ? this.state.response.message : ''}</p>
        <button class='app-btn' onClick={this.onOpenAppModal}>Update application</button>
        <Modal open={open} onClose={this.onCloseAppModal} center>
        <form onSubmit={this.handleSubmit}>
          Name: <input type='name' value={this.state.name} onChange={this.handleAppChange} /><br />
          Date of birth: <input type='name' placeholder="mm/dd/yyyy"value={this.state.dateOfBirth} onChange={this.handleAppChange} /><br />
          Phone number: <input type='name' value={this.state.phone} onChange={this.handleAppChange} /><br />
          Current address:
          Street: <input type='text' value={this.state.street} onChange={this.handleAppChange} /><br />
          City: <input type='text' value={this.state.city} onChange={this.handleAppChange} /><br />
          State: <input type='text' value={this.state.state} onChange={this.handleAppChange} /><br />
          Zip: <input type='number' value={this.state.zip} onChange={this.handleAppChange} /><br />
          City: <input type='text' value={this.state.city} onChange={this.handleAppChange} /><br />
          State: <input type='text' value={this.state.state} onChange={this.handleAppChange} /><br />
          Previous address: <input type='text' value={this.state.prevAddresses} onChange={this.handleAppChange} /><br />
          SSN: <input type='number' value={this.state.socialSecurity} onChange={this.handleAppChange} /><br />
          Current employer:<input type='name' value={this.state.currentEmployer} onChange={this.handleAppChange} /><br />
          Current monthly income:<input type='number' value={this.state.currentMonthIncome} onChange={this.handleAppChange} /><br />
          Credit score:<input type='number' value={this.state.creditScore} onChange={this.handleAppChange} /><br />
          References:<input type='text' value={this.state.references} onChange={this.handleAppChange} /><br />
          <input type='submit' value='Update' />
        </form>
        </Modal>
      </div>
    )
  }
}

export default UpdateApp;
