import React, { Component } from 'react';
import api from '../../services/api';
import DatePicker from 'react-datepicker';
import { format, getDay, getMonth, getYear, getDaysInMonth } from 'date-fns';

import DayBox from './DayBox';

import { Container, ToolBox, DateBox, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    calendar: [],
    flash: '',
    error: '',
    editingItemId: '',
    loading: true,
    selectedDate: format(Date.now(), 'MM/DD/YYYY'),
    showCalendar: false,
  };

  async componentDidMount() {
    const { selectedDate } = this.state;
    this.fetchList(selectedDate);
  }

  toggleCalendar = () => {
    const showCalendar = !this.state.showCalendar;
    this.setState({ showCalendar });
  };

  handleChange = async e => {
    const selectedDate = format(e, 'MM/DD/YYYY');
    this.fetchList(selectedDate);
    this.toggleCalendar();
  };

  fetchList = async date => {
    const month = getMonth(date);
    const year = getYear(date);
    const response = await api.get(`completed?date_gte=0${month + 1}/01/${year}&date_lte=0${month + 1}/31/${year}`);
    this.setState({ list: response.data, loading: false });
    this.buildCalendar(date, response.data);
    const total = await this.getTotal(response.data);
    const { setTotal } = this.props;
    setTotal({ value: total, from: 'month' });
  };

  getTotal = list => {
    // const { list } = this.state;
    console.log('list from getTotal', list);
    let total = list.map(item => parseInt(item.value)).reduce((a, b) => a + b, 0);
    return total;
  };

  buildCalendar = (date, list) => {
    const daysInMonth = getDaysInMonth(date);
    const calendar = Array.from({ length: daysInMonth }, (v, i) => i + 1).map(item => ({ ...item, day: item }));
    calendar.map(item => {
      let dayTotal = 0;
      list.map(day => {
        if (parseInt(format(day.date, 'DD')) === item.day) {
          dayTotal = dayTotal + parseInt(day.value);
        }
        return (item.total = dayTotal);
      });
    });
    this.setState({ calendar });
  };

  render() {
    const { list, calendar, flash, loading, showCalendar, selectedDate } = this.state;

    return (
      <Container>
        <ToolBox>
          {/* <p>{flash && flash}</p> */}
          <button onClick={this.toggleCalendar} className="teal-btn">
            Select a Month
          </button>
          <span>Month: {selectedDate}</span>
        </ToolBox>
        {showCalendar && (
          <DateBox id="daily-box">
            <DatePicker
              inline
              selected={Date.now()}
              showMonthYearPicker
              onChange={e => {
                this.handleChange(e, 'day');
              }}
            />
          </DateBox>
        )}
        <div>
          <TasksList>
            {!loading ? (
              list.length > 0 ? (
                list && calendar.map(item => <DayBox key={item.day} item={item} />)
              ) : (
                <div className="nothing-box">Nothing to list in this month</div>
              )
            ) : (
              <p>loading...</p>
            )}
          </TasksList>
        </div>
      </Container>
    );
  }
}

export default List;

// nav calls function up in List
// function sets month or day
// display month or day
