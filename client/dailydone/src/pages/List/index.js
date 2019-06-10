import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Form, Select } from '@rocketseat/unform';

import ConfirmButton from '../../components/ConfirmButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, FormBox, FormInput, FormSelect, TasksList } from './styles';

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
  };

  componentDidMount() {
    this.fetchTypes();
    this.updateList();
  }

  updateList = async () => {
    const response = await api.get('completed?_expand=type');
    const flatList = response.data.map(item => ({ ...item, type: item.type.title }));
    this.setState({ list: flatList, loading: false, editingItemId: '' });
    this.getTotal();
    this.getConfig();
  };

  fetchTypes = async () => {
    const response = await api.get('types');
    this.setState({ types: response.data, loading: false });
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

  removeItem = async id => {
    this.setState({ loading: true });
    await api.delete(`completed/${id}`);
    this.updateList();
  };

  editItem = id => {
    this.setState({ loading: false, editingItemId: id });
  };

  handleUpdate = async data => {
    this.setState({ loading: true });
    await api.put(`completed/${data.id}`, { ...data });
    this.updateList();
  };

  handleSubmit = async (data, { resetForm }) => {
    this.setState({ loading: true });
    const id = Math.floor(Math.random() * 1000);
    await api.post(`completed/`, {
      ...data,
      id,
    });
    this.updateList();
    resetForm();
  };

  render() {
    const { list, types, currency, dailyMeta, flash, loading, editingItemId, total } = this.state;
    console.log('meta: ', dailyMeta, 'total: ', total);

    const displayItem = item => (
      <li key={item.id}>
        <span className="text">{item.text}</span>
        <span className="type">{item.type}</span>
        <span className="value">{item.value}</span>
        <span className="duration">{item.duration}</span>

        <div className="btn-box">
          <button
            className="edit-btn"
            onClick={() => {
              this.editItem(item.id);
            }}
          >
            edit
          </button>
          <ConfirmButton
            className="remove-btn"
            dialog={['X', 'confirm']}
            action={() => {
              this.removeItem(item.id);
            }}
          >
            x
          </ConfirmButton>
        </div>
      </li>
    );

    const editItem = item => (
      <li key={item.id}>
        <FormBox>
          <Form onSubmit={this.handleUpdate} initialData={{ ...item }}>
            <FormInput type="hidden" name="id" />
            <FormInput type="text" name="text" placeholder={item.text || 'text'} />
            <FormSelect name="typeId" options={types} required />
            <FormInput type="number" name="value" placeholder={item.value || 'value'} />
            <FormInput type="number" name="duration" placeholder={item.duration || 'duration'} />
            <button type="submit" className="save-btn">
              Update
            </button>
          </Form>
        </FormBox>
      </li>
    );

    return (
      <Fragment>
        <Header />
        <Container>
          <p>{flash && flash}</p>
          <FormBox>
            <Form onSubmit={this.handleSubmit}>
              <FormInput type="text" name="text" placeholder="Text" required />
              {/* <FormInput type="text" name="type" placeholder="Type" required /> */}
              <FormSelect name="typeId" options={types} required />
              <FormInput type="number" name="value" placeholder="Value" required />
              <FormInput type="number" name="duration" placeholder="Duration" required />
              <button type="submit">Save</button>
            </Form>
          </FormBox>
          <TasksList>
            <div>
              {!loading ? (
                list.length > 0 ? (
                  <ul>{list && list.map(item => (item.id !== editingItemId ? displayItem(item) : editItem(item)))}</ul>
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
