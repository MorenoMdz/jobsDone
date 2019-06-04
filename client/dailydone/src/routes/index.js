import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Config from '../pages/Config';
import Login from '../pages/Login';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/today" exact component={List} />
          <Route path="/week" exact component={List} />
          <Route path="/month" exact component={List} />
          <Route path="/config" exact component={Config} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
