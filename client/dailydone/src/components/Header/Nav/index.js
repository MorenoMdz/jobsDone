import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Config from '../../Config';

import { Container, ConfigBox, DailyBox, Navigation, Button } from './styles';

class Nav extends Component {
  state = {
    // startDate: Date.now(),
    selectedDay: '',
  };

  toggleBox = boxName => {
    document.getElementById(`${boxName}-box`).classList.toggle('active');
  };

  handleChange = (e, type) => {
    console.log('e: ', e, 'type: ', type);
    this.toggleBox(type);
    // const selectedDay = e.
    // this.setState({ selectedDay: e });
  };

  render() {
    const { selectedDay } = this.state;

    return (
      <Container>
        <div>
          <span>{selectedDay}</span>
          <Button onClick={() => this.toggleBox('daily')}>Day</Button>
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
        <Navigation to="/week">Week</Navigation>
        <div>
          <Button onClick={() => this.toggleBox('month')}>Month</Button>
          <DailyBox id="month-box">
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
        <ConfigBox id="config-box">
          <Config />
        </ConfigBox>
      </Container>
    );
  }
}

export default Nav;
