import React, { Component } from 'react';
import api from '../../services/api';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import { Container, ToolBox, DateBox, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    types: [],
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
    const selectedDate = format(e, 'MM/YYYY');
    console.log('selected date from handleChange', selectedDate);
    this.fetchList(selectedDate);
    this.toggleCalendar();
  };

  fetchList = async date => {
    console.log(date);
    // parse month and year out
    const response = await api.get(`completed?date_gte=01/${date}&date_lte=31/${date}`);
    this.setState({ list: response.data, loading: false });
    // const total = await this.getTotal();
    const { setTotal } = this.props;
    console.log(`completed?date_gte=01/${date}&date_lte=31/${date}`);
    // setTotal(total);
  };

  getTotal = () => {
    const { list } = this.state;
    let total = list.map(item => parseInt(item.value)).reduce((a, b) => a + b, 0);
    return total;
  };

  render() {
    const { list, flash, loading, editingItemId, showCalendar, selectedDate } = this.state;

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
              dateFormat="yyyy/MM/dd"
            />
          </DateBox>
        )}
        <div>
          <TasksList>
            {!loading ? (
              list.length > 0 ? (
                <ul>{list && list.map(item => (item.id !== editingItemId ? '1' : '2'))}</ul>
              ) : (
                <div className="nothing-box">Nothing to list in this day</div>
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
