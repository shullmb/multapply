import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button'

class GroupAppSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.onOpenGroupAppModal = this.onOpenGroupAppModal.bind(this)
    this.onCloseGroupAppModal = this.onCloseGroupAppModal.bind(this)
  }

  onOpenGroupAppModal() {
    this.setState({ open: true });
  };

  onCloseGroupAppModal() {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const groupSummary = this.props.group ? this.props.group.map( member => <h3>{member.name} : {member.creditScore}</h3>) : ''
    return (
      <div>
        <Button onClick={this.onOpenGroupAppModal} >
          <a>See Group Application Summary</a>
        </Button>
        <Modal open={open} onClose={this.onCloseGroupAppModal} center>
          {groupSummary}
        </Modal>
      </div>
    )
  }
}

export default GroupAppSummary;