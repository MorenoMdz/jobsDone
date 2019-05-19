import React, { Component, Fragment } from 'react';

import Header from '../Header';
import List from '../List';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <List />
      </Fragment>
    );
  }
}

export default Main;
