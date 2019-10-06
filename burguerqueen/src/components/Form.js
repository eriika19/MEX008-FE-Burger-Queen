import React from 'react';
import { withRouter, BrowserRouter, Route , Switch, Redirect } from 'react-router-dom';
// Link
import { Col, Form, Input, Button } from 'reactstrap';
import Menu from '../pages/Menu';

class FormUI extends React.Component {
  constructor() {
    super();
    this.state = {
      client: {
        name: ''
      }
    };
  }

  handleClick(ev) {
    if (this.state.client.name) {
      ev.preventDefault();
      this.props.BrowserHistory.push('/MEX008-FE-Burger-Queen/Menu');
      this.props.closeModal();
    } else {
    }
  }

  onChange = e => {
    this.setState({
      client: {
        name: e.target.value
      }
    });
    const clientName = e.target.value;
    localStorage.setItem('clientName', clientName);

    const order = [];
    localStorage.setItem('order', JSON.stringify(order));
  };

  render() {
    return (
      <Form>
        <Col sm={10}>
          <Input
            type="text"
            value={this.state.client.name}
            name={this.props.name}
            id={this.props.id}
            placeholder={this.props.placeholder}
            bsSize="lg"
            onChange={e => this.onChange(e)}
            required
          />
        </Col>
        <BrowserRouter>
          <Button
            type="submit"
            className="btn btn-dark save"
            onClick={this.handleClick.bind(this)}>
              <Switch>
                <Redirect 
                from="/MEX008-FE-Burger-Queen/Home" 
                to="/MEX008-FE-Burger-Queen/Menu"/>GUARDAR
                <Route path="/" exact component={Menu}/>
                <Redirect to="/"/>
              </Switch>
          </Button>
        </BrowserRouter>
      </Form>
    );
  }
}

export default withRouter(FormUI);
