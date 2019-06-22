import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ConfirmButton extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
    times: PropTypes.number,
  };

  state = {
    timesPressed: 0,
  };

  onPress = () => {
    const { timesPressed } = this.state;
    const { action, dialog } = this.props;
    const times = dialog.length;
    this.setState(
      {
        timesPressed: timesPressed + 1,
      },
      () => {
        if (this.state.timesPressed === times) {
          action();
          this.setState({ timesPressed: 0 });
        }
      }
    );
  };

  render() {
    const { timesPressed } = this.state;
    const { dialog, className } = this.props;
    return (
      <button className={className} level={timesPressed} onClick={this.onPress}>
        {dialog[timesPressed]}
      </button>
    );
  }
}
