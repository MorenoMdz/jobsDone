import React, { Component, Fragment } from 'react';
import api from '../../services/api';

import Header from '../Header';
import List from '../List';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <hr />
        <List />
      </Fragment>
    );
  }
}

export default Main;
