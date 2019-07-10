import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

import List from '../pages/List';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/list" exact component={List} />
          <PrivateRoute path="/list/:day" component={List} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
