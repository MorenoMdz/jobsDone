import React, { Component } from 'react';
import api from '../../services/api';
import { Form } from '@rocketseat/unform';

import { Container, FormBox, FormInput, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    flash: '',
    error: '',
    loading: true,
  };

  componentDidMount() {
    this.updateList();
  }

  updateList = async () => {
    const response = await api.get('completed');
    this.setState({ list: response.data, loading: false });
  };

  removeItem = async id => {
    this.setState({ loading: true });
    await api.delete(`completed/${id}`);
    this.updateList();
  };

  editItem = async id => {
    const { list } = this.state;
    const editItemState = list.map(item =>
      item.id === id ? { ...item, editable: true } : item
    );
    this.setState({ ...this.state, loading: false, list: editItemState });
  };

  handleSubmit = async (data, { resetForm }) => {
    this.setState({ loading: true });
    const id = Math.floor(Math.random() * 1000);
    await api.post(`completed/`, {
      ...data,
      id,
    });
    this.updateList();
  };

  handleUpdate = async (data, { resetForm }) => {
    await api.put(`completed/${data.id}`, { ...data });
    this.updateList();
  };

  render() {
    const { list, flash, loading } = this.state;

    const displayItem = item => (
      <li key={item.id}>
        <span className="text">{item.text}</span>
        <span className="type">{item.type}</span>
        <span className="value">{item.value}</span>
        <span className="duration">{item.duration}</span>
        {`|| >>`}
        <div>
          <button
            onClick={() => {
              this.editItem(item.id);
            }}
          >
            edit
          </button>
          <button
            onClick={() => {
              this.removeItem(item.id);
            }}
          >
            x
          </button>
        </div>
      </li>
    );

    const editItem = item => (
      <li key={item.id}>
        <Form onSubmit={this.handleUpdate}>
          {/* <FormInput type="hidden" name="id" value={item.id} /> */}
          <FormInput type="text" name="text" placeholder={item.text} />
          <FormInput type="text" name="type" placeholder={item.type} />
          <FormInput type="text" name="value" placeholder={item.value} />
          <FormInput type="text" name="duration" placeholder={item.duration} />
          <button type="submit">Update</button>
        </Form>
      </li>
    );

    return (
      <Container>
        <p>{flash && flash}</p>
        <FormBox>
          <Form onSubmit={this.handleSubmit}>
            {/* <FormInput type="number" name="id" placeholder="id toremove" /> */}
            <FormInput type="text" name="text" placeholder="text" />
            <FormInput type="text" name="type" placeholder="type" />
            <FormInput type="text" name="value" placeholder="value" />
            <FormInput type="text" name="duration" placeholder="duration" />
            <button type="submit">Save</button>
          </Form>
        </FormBox>
        <TasksList>
          <div>
            <span>Feito</span>
            <span>Tipo</span>
            <span>Valor</span>
          </div>
          <div>
            {!loading ? (
              <ul>
                {list &&
                  list.map(item =>
                    !item.editable ? displayItem(item) : editItem(item)
                  )}
              </ul>
            ) : (
              <p>loading...</p>
            )}
          </div>
        </TasksList>
      </Container>
    );
  }
}

export default List;
