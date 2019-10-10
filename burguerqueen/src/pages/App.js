import React, { Component } from 'react';
import  Main from './Main';

// import Home from './Home';
// import Menu from './Menu';
// import Login from './Login';
// import GetIn from './GetIn';
// import Kitchen from './Kitchen';
// import Error from './Error404';
import './App.css';
import GetIn from './GetIn';

class App extends Component {
  render() {
    return (
      <Main>
        <GetIn />
      </Main>
    );
  }
}

export default App;
