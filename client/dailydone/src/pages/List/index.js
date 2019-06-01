import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import { Form } from '@rocketseat/unform';

import ConfirmButton from '../../components/ConfirmButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, FormBox, FormInput, ListHeader, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    total: '',
    flash: '',
    error: '',
    editingItemId: '',
    loading: true,
  };

  componentDidMount() {
    this.updateList();
  }

  updateList = async () => {
    const response = await api.get('completed');
    this.setState({ list: response.data, loading: false, editingItemId: '' });
    this.getTotal();
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

  handleUpdate = async (data, { resetForm }) => {
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
    const { list, flash, loading, editingItemId, total } = this.state;

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
        <Form onSubmit={this.handleUpdate} initialData={{ ...item }}>
          <FormInput type="hidden" name="id" value={item.id} />
          <FormInput type="text" name="text" placeholder={item.text || 'text'} />
          <FormInput type="text" name="type" placeholder={item.type || 'type'} />
          <FormInput type="text" name="value" placeholder={item.value || 'value'} />
          <FormInput type="text" name="duration" placeholder={item.duration || 'duration'} />
          <button type="submit" className="teal-btn">
            Update
          </button>
        </Form>
      </li>
    );

    return (
      <Fragment>
        <Header total={total} />
        <Container>
          <p>{flash && flash}</p>
          <FormBox>
            <Form onSubmit={this.handleSubmit}>
              <FormInput type="text" name="text" placeholder="Text" />
              <FormInput type="text" name="type" placeholder="Type" />
              <FormInput type="text" name="value" placeholder="Value" />
              <FormInput type="text" name="duration" placeholder="Duration" />
              <button type="submit">Save</button>
            </Form>
          </FormBox>
          <TasksList>
            {/* <ListHeader>
            <span>Done</span>
            <span>Type</span>
            <span>Value</span>
            <span>Duration</span>
            <span>Actions</span>
          </ListHeader> */}
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
