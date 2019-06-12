import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Container, ModalBg, ConfigBox, DailyBox, Navigation, Button } from '../styles';

class Box extends Component {
  state = {
    showBox: '',
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleChange = (e, type) => {
    console.log('e: ', e, 'type: ', type);
    this.setState({ showBox: '' });
    // this.toggleBox(type);
    // const selectedDay = e.
    // this.setState({ selectedDay: e });
  };

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return console.log('test');
    }
    console.log('test outside');
  };

  render() {
    const { boxName } = this.props;
    console.log(boxName);
    return (
      <div ref={node => (this.node = node)}>
        <DailyBox id="daily-box">
          <DatePicker
            inline
            selected={new Date()}
            onChange={e => {
              this.handleChange(e, 'daily');
            }}
            // placeholderText="Click to select a date"
            dateFormat="yyyy/MM/dd"
          />
        </DailyBox>
      </div>
    );
  }
}

export default Box;
