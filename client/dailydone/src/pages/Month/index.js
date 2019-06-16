import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { format } from 'date-fns';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    types: [],
    meta: '',
    total: '',
    flash: '',
    error: '',
    editingItemId: '',
    loading: true,
    selectedDate: '',
  };

  componentDidMount() {
    this.updateList();
  }

  setDate = date => {
    this.setState({ loading: true, selectedDate: date });
    this.updateList();
  };

  updateList = async () => {
    const { selectedDate } = this.state;
    const response = await api.get(`completed?date_gte=01/${selectedDate}&date_lte=31/${selectedDate}`);
    this.setState({ list: response.data, loading: false, editingItemId: '' });
    this.getTotal();
    this.getConfig();
  };

  getTotal = () => {
    const { list } = this.state;
    let total = list.map(item => parseInt(item.value)).reduce((a, b) => a + b, 0);
    this.setState({ total: parseInt(total).toFixed(2) });
  };

  getConfig = async () => {
    const response = await api.get('users/1');
    const { dailyMeta, currency } = response.data;
    this.setState({ dailyMeta, currency });
  };

  render() {
    const { list, currency, dailyMeta, selectedDate, flash, loading, total } = this.state;

    return (
      <Fragment>
        <Header setDate={this.setDate} selectedDate={selectedDate} />
        <Container>
          <p>{flash && flash}</p>
          <TasksList>
            <div>
              {!loading ? (
                list.length > 0 ? (
                  <p>days of the month</p>
                ) : (
                  <div className="nothing-box">Nothing??</div>
                )
              ) : (
                <p>loading...</p>
              )}
            </div>
          </TasksList>
        </Container>
        <Footer total={total} meta={dailyMeta} currency={currency} />
      </Fragment>
    );
  }
}

export default List;
