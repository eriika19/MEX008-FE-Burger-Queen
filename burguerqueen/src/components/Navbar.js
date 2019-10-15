import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class Navbar extends React.Component {
  handleClick(ev) {
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar nav-dark">
        <Button
          type="submit"
          className="btn btn-dark double og-hover"
          onClick={this.handleClick.bind(this)}
        >
          IR A ADMINISTRACIÓN
        </Button>
      </nav>
    );
  }
}

export default withRouter(Navbar);
