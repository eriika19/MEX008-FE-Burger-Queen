import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GetIn from './GetIn';
import Home from './Home';
import Menu from './Menu';
import Kitchen from './Kitchen'

const Main = () => (
    <Switch>
        <Route exact path="/" component={GetIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/kitchen" component={Kitchen} />
    </Switch>
)

export default Main;