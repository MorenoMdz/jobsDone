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
    selectedDate: format(Date.now(), 'MM/DD/YYYY'),
    dateType: '',
  };

  componentDidMount() {
    this.fetchTypes();
    this.getConfig();
  }

  setDateType = type => {
    this.setState({ dateType: type }, console.log('set', type));
    this.updateList();
  };

  updateList = async () => {
    this.setState({ loading: true });
    const { selectedDate } = this.state;
    const response = await api.get(`completed?date=${selectedDate}&_expand=type`);
    const flatList = await response.data.map(item => ({ ...item, type: item.type.title }));
    this.setState({ list: flatList, loading: false, editingItemId: '' });
    this.getConfig();
  };

  fetchTypes = async () => {
    const response = await api.get('types');
    this.setState({ types: response.data });
  };

  setTotal = total => {
    this.setState({ total: { ...total } });
  };

  getConfig = async () => {
    const response = await api.get('users/1');
    const { dailyMeta, currency } = response.data;
    this.setState({ dailyMeta, currency });
  };

  render() {
    const { dateType, currency, dailyMeta, selectedDate, total } = this.state;

    return (
      <Fragment>
        <Header setDateType={this.setDateType} selectedDate={selectedDate} />
        <Container>
          {dateType === 'month' ? (
            <Month selectedDate={selectedDate} setTotal={this.setTotal} />
          ) : (
            <Day selectedDate={selectedDate} setTotal={this.setTotal} />
          )}
        </Container>
        <Footer total={total} meta={dailyMeta} currency={currency} />
      </Fragment>
    );
  }
}

export default List;
