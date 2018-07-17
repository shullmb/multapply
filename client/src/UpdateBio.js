import React, {Component} from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class UpdateBio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: '',
      open: false
    }
    this.handleBioChange = this.handleBioChange.bind(this)
    this.onOpenBioModal = this.onOpenBioModal.bind(this)
    this.onCloseBioModal = this.onCloseBioModal.bind(this)
  }

  onOpenBioModal = () => {
    this.setState({ open: true });
  };

  onCloseBioModal = () => {
    this.setState({ open: false });
  };

  handleBioChange(e) {
    this.setState({
      bio: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/users/bio', {
      bio: this.state.bio
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
        <button class='bio-btn' onClick={this.onOpenBioModal}>Update bio</button>
        <Modal open={open} onClose={this.onCloseBioModal} center>
        <form onSubmit={this.handleSubmit}>
          Bio: <input type='text' value={this.state.bio} onChange={this.handleBioChange} /><br />
          <input type='submit' value='Update' />
        </form>
        </Modal>
      </div>
    )
  }
}

export default UpdateBio;