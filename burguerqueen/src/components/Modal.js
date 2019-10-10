import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import FormUI from './Form';

// import {Link} from 'react-router-dom';

class ModalUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
            <FormUI
              name="costumer-name"
              id="costumer-name"
              placeholder="Nombre del cliente"
              closeModal={this.toggle}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalUI;
