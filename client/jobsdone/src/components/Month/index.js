import React, { Component } from 'react';
import api from '../../services/api';
import DatePicker from 'react-datepicker';
import { format, startOfMonth, getDay, getMonth, getYear, getDaysInMonth, isSunday } from 'date-fns';

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
    this.setState({ selectedDate });
  };

  fetchList = async date => {
    const month = getMonth(date);
    const year = getYear(date);
    const dateQuery = `search?month=${year}-0${month + 1}-01`;
    const response = await api.get(dateQuery);
    this.setState({ list: response.data, loading: false });
    this.buildCalendar(date, response.data);
    const total = await this.getTotal(response.data);
    const { setTotal } = this.props;
    setTotal({ value: total, from: 'month' });
  };

  getTotal = list => {
    let total = list.map(item => parseInt(item.value)).reduce((a, b) => a + b, 0);
    return total;
  };

  buildCalendar = (date, list) => {
    const monthStartsAt = getDay(startOfMonth(date)) + 1;
    const daysInMonth = getDaysInMonth(date);
    const calendar = Array.from({ length: daysInMonth }, (v, i) => i + 1).map(item => ({ ...item, day: item }));
    // eslint-disable-next-line
    calendar.map(item => {
      let dayTotal = 0;
      list.map(day => {
        if (parseInt(format(day.created_at, 'DD')) === item.day) {
          dayTotal = dayTotal + parseInt(day.value);
        }
        return (item.total = dayTotal);
      });
    });
    calendar.map(i => (i.isSunday = isSunday(`${getMonth(date) + 1}/${i.day}/${getYear(date)}`)));
    calendar.map(i => (i.slug = `0${getMonth(date) + 1}/${i.day}/${getYear(date)}`));
    this.setState({ calendar, monthStartsAt });
  };

  render() {
    const { calendar, monthStartsAt, loading, showCalendar, selectedDate } = this.state;
    const { currency, setDateType } = this.props;

    return (
      <Container>
        <ToolBox>
          {/* <p>{flash && flash}</p> */}
          <button onClick={this.toggleCalendar} className="teal-btn">
            Select a Month
          </button>
          <span>Month: {format(selectedDate, 'MMMM')}</span>
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
        <TasksList>
          {!loading ? (
            calendar.map(item => (
              <DayBox
                key={item.day}
                item={item}
                currency={currency}
                monthStartsAt={item.day === 1 && monthStartsAt}
                isSunday={item.isSunday}
                setDateType={setDateType}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
        </TasksList>
      </Container>
    );
  }
}

export default List;
