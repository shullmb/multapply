import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class UpdateApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      dateOfBirth:null,
      phone:'',
      street:'',
      city:'',
      state:'',
      zip:'',
      prevAddresses:'',
      socialSecurity:'',
      currentEmployer:'',
      currentMonthIncome:'',
      creditScore:'',
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
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/users/${this.props.user._id}`, {
      name:this.state.name,     
      dateOfBirth:this.state.dateOfBirth,
      phone:this.state.phone,
      street:this.state.street,
      city:this.state.city,
      state:this.state.state,
      zip:this.state.zip,
      prevAddresses:this.state.prevAddresses,
      socialSecurity:this.state.socialSecurity,
      currentEmployer:this.state.currentEmployer,
      currentMonthIncome:this.state.currentMonthIncome,
      creditScore:this.state.creditScore
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
          Name: <input type='text' name="name" value={this.state.name} onChange={this.handleAppChange} /><br />
          Date of birth: <input type='date' name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleAppChange} /><br />
          Phone number: <input type='number' name="phone" value={this.state.phone} onChange={this.handleAppChange} /><br />
          Current address:
          Street: <input type='text' name="street" value={this.state.street} onChange={this.handleAppChange} /><br />
          City: <input type='text' name="city" value={this.state.city} onChange={this.handleAppChange} /><br />
          State: <input type='text' name="state" value={this.state.state} onChange={this.handleAppChange} /><br />
          Zip: <input type='number' name="zip" value={this.state.zip} onChange={this.handleAppChange} /><br />
          City: <input type='text' name="city" value={this.state.city} onChange={this.handleAppChange} /><br />
          State: <input type='text' name="state" value={this.state.state} onChange={this.handleAppChange} /><br />
          SSN: <input type='number' name="socialSecurity" value={this.state.socialSecurity} onChange={this.handleAppChange} /><br />
          Current employer:<input type='text' name="currentEmployer" value={this.state.currentEmployer} onChange={this.handleAppChange} /><br />
          Current monthly income:<input type='number' name="currentMonthIncome" value={this.state.currentMonthIncome} onChange={this.handleAppChange} /><br />
          Credit score:<input type='number' name="creditScore" value={this.state.creditScore} onChange={this.handleAppChange} /><br />
          <input type='submit' value='Update' />
        </form>
        </Modal>
      </div>
    )
  }
}

export default UpdateApp;
