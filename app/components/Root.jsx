import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import AllThePuppies from './AllThePuppies';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path ="/cutepuppies" component={ AllThePuppies } />
          </Switch>
        </div>
      </Router>
    )
  }
}