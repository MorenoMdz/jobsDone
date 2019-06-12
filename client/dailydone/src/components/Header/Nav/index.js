import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Config from '../../Config';
// import OutsideClickHandler from 'react-outside-click-handler';

import { Container, ModalBg, ConfigBox, DailyBox, Navigation, Button } from './styles';

class Nav extends Component {
  state = {
    selectedDay: '',
    showBox: '',
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return console.log('test');
    }
    this.setState({ showBox: '' });
    console.log('outside');
  };

  toggleBox = boxName => {
    this.setState({ showBox: boxName });
  };

  handleChange = (e, type) => {
    console.log('e: ', e, 'type: ', type);
    this.setState({ showBox: '' });
  };

  render() {
    const { selectedDay, showBox } = this.state;

    return (
      <Container>
        <div>
          <span>{selectedDay}</span>
          <Button onClick={() => this.toggleBox('daily')}>Day</Button>
          <DailyBox id="daily-box" ref={node => (this.node = node)} className={showBox === 'daily' && 'active'}>
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
        <Navigation to="/week">Week</Navigation>
        <div>
          <Button onClick={() => this.toggleBox('month')}>Month</Button>

          <DailyBox id="month-box" ref={node => (this.node = node)} className={showBox === 'month' && 'active'}>
            <DatePicker
              inline
              selected={this.state.startDate}
              onChange={e => {
                this.handleChange(e, 'month');
              }}
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          </DailyBox>
        </div>
        <div>
          <Button onClick={() => this.toggleBox('config')} className="config">
            &#9881;
          </Button>
        </div>

        <ConfigBox id="config-box" ref={node => (this.node = node)} className={showBox === 'config' && 'active'}>
          <Config />
        </ConfigBox>
      </Container>
    );
  }
}

export default Nav;
