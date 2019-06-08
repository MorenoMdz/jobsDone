import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Form, Select } from '@rocketseat/unform';

import ConfirmButton from '../../components/ConfirmButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, FormBox, FormInput, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    types: [],
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
    console.log(response);
    const flatList = response.data.map(item => ({ ...item, type: item.type.title }));
    console.log('flatlist: ', flatList);
    this.setState({ list: flatList, loading: false, editingItemId: '' });
    this.getTotal();
  };

  fetchTypes = async () => {
    const response = await api.get('types');
    this.setState({ types: response.data, loading: false });
  };

  getTotal = () => {
    const { list } = this.state;
    let total = list.map(item => parseInt(item.value)).reduce((a, b) => a + b, 0);
    this.setState({ total });
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
    const { list, types, flash, loading, editingItemId, total } = this.state;

    const displayItem = item => (
      <li key={item.id}>
        <span className="text">{item.text}</span>
        <span className="type">{item.type}</span>
        <span className="value">{item.value}</span>
        <span className="duration">{item.duration}</span>
        {`>`}
        <div>
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
            <Select name="typeId" options={types} required />
            <FormInput type="number" name="value" placeholder={item.value || 'value'} />
            <FormInput type="number" name="duration" placeholder={item.duration || 'duration'} />
            <button type="submit" className="teal-btn">
              Update
            </button>
          </Form>
        </FormBox>
      </li>
    );

    return (
      <Fragment>
        <Header total={total} />
        <Container>
          <p>{flash && flash}</p>
          <FormBox>
            <Form onSubmit={this.handleSubmit}>
              <FormInput type="text" name="text" placeholder="Text" required />
              {/* <FormInput type="text" name="type" placeholder="Type" required /> */}
              <Select name="typeId" options={types} required />
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
        <Footer total={total} />
      </Fragment>
    );
  }
}

export default List;
