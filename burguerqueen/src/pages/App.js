import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import GetIn from './GetIn';
import Kitchen from './Kitchen';
import Error from './Error404';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ''} >
      <Switch>
      <Route exact path="/" render={props => < GetIn />}></Route>
      <Route exact path="/Home" render={props => < Home />}></Route>
      <Route exact path="/Menu" render={props => < Menu />}></Route>
      <Route exact path="/Kitchen" render={props => < Kitchen />}></Route>
      <Route exact path="/Error" render={props => < Error />}></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
