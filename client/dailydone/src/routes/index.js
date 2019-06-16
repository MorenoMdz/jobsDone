import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Month from '../pages/Month';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/day" exact component={List} />
          <Route path="/month" exact component={Month} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
