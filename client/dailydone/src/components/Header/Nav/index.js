import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { format, getDate, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import Config from '../../Config';

import { Container, ConfigBox, DateBox, Navigation, Button } from './styles';

class Nav extends Component {
  state = {
    selectedDay: '',
    showBox: '',
    selectedDay: '',
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return console.log('test', e);
    }
    this.setState({ showBox: '' });
    console.log('outside');
  };

  toggleBox = boxName => {
    this.setState({ showBox: boxName });
  };

  handleChange = (e, type) => {
    this.setState({ showBox: '', selectedDay: '' });
    const { setDay } = this.props;
    const day = format(e, 'MM/DD/YYYY');
    setDay(day);
  };

  render() {
    const { selectedDay, showBox } = this.state;

    return (
      <Container>
        <span>{showBox}</span>
        <div>
          <Button onClick={() => this.toggleBox('daily')}>Day</Button>
        </div>
        <Navigation to="/week">Week</Navigation>
        <div>
          <Button onClick={() => this.toggleBox('month')}>Month</Button>
        </div>
        <div>
          <Button onClick={() => this.toggleBox('config')} className="config">
            &#9881;
          </Button>
        </div>

        <ConfigBox id="config-box" ref={node => (this.node = node)} className={showBox && 'active'}>
          {/* Dividir em componentes menores (BOX) e arrumar style (Redux)*/}
          {showBox === 'daily' && (
            <DateBox id="daily-box" className={showBox === 'daily' && 'active'}>
              <DatePicker
                inline
                selected={selectedDay}
                maxDate={new Date()}
                onChange={e => {
                  this.handleChange(e, 'daily');
                }}
                dateFormat="yyyy/MM/dd"
              />
            </DateBox>
          )}
          {showBox === 'month' && (
            <DateBox id="month-box" className={showBox === 'month' && 'active'}>
              <DatePicker
                inline
                selected={this.state.startDate}
                onChange={e => {
                  this.handleChange(e, 'month');
                }}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
            </DateBox>
          )}
          {showBox === 'config' && <Config />}
        </ConfigBox>
      </Container>
    );
  }
}

export default Nav;
