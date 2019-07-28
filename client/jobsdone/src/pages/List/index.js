import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { format } from 'date-fns';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Day from '../../components/Day';
import Month from '../../components/Month';

import { Container } from './styles';

class List extends Component {
  state = {
    list: [],
    types: [],
    meta: '',
    total: '',
    flash: '',
    error: '',
    loading: true,
    selectedDate: format(Date.now(), 'YYYY-MM-DD'),
    dateType: 'day',
  };

  componentDidMount() {
    this.fetchTypes();
    this.getConfig();
  }

  setDateType = async (type, day = format(Date.now(), 'YYYY-MM-DD')) => {
    await this.setState({ dateType: type, selectedDate: day });
    this.setState({ selectedDate: day });
    this.fetchDay(day);
  };

  fetchDay = async day => {
    const response = await api.get(`search?day=${day}`);
    const flatList = await response.data.map(item => ({ ...item, type: item.type.title }));
    this.setState({ list: flatList, loading: false, editingItemId: '' });
  };

  fetchTypes = async () => {
    const response = await api.get('types');
    this.setState({ types: response.data });
  };

  getConfig = async () => {
    const userId = localStorage.getItem('@jobsdone-id');
    const response = await api.get(`users/${userId}`);
    const { meta, currency } = response.data;
    this.setState({ meta, currency });
  };

  setTotal = total => {
    this.setState({ total: { ...total } });
  };

  render() {
    const { dateType, currency, meta, selectedDate, total } = this.state;

    return (
      <Fragment>
        <Header setDateType={this.setDateType} selectedDate={selectedDate} selected={dateType} />
        <Container>
          {dateType === 'month' ? (
            <Month
              selectedDate={selectedDate}
              setDateType={this.setDateType}
              setTotal={this.setTotal}
              currency={currency}
            />
          ) : (
            <Day selectedDate={selectedDate} setTotal={this.setTotal} currency={currency} day={selectedDate} />
          )}
        </Container>
        <Footer total={total} meta={meta} currency={currency} />
      </Fragment>
    );
  }
}

export default List;

// PASS date from daybox to day
