/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Boxfinish from '../components/Boxconfirmation';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        name: ''
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const clientName = localStorage.getItem('clientName')
      ? localStorage.getItem('clientName').toUpperCase()
      : '';

    this.setState({
      client: {
        name: clientName,
        order: JSON.parse(localStorage.getItem('order'))
      }
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleClick(ev) {
    if (this.state.client.name) {
      ev.preventDefault();
      this.props.history.push('/Kitchen');
      //         this.props.closeModal();
    } else {
    }
  }

  render() {
    return (
      <div>
        <Button className={this.props.class} color="dark" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <Boxfinish clientName={this.state.client.name} />
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              className="btn btn-dark save"
              onClick={this.handleClick.bind(this)}
            >
              ENVIAR A COCINA
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Confirmation);
