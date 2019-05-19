import React, { Component } from 'react';
import api from '../../services/api';
import { Form, Input } from '@rocketseat/unform';
// import FormGroup from '../FormGroup';

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

  removeItem = id => {
    api.delete(`completed/${id}`);
  };

  handleSubmit = async (data, { resetForm }) => {
    this.setState({ loading: true });
    await api.post(`completed/`, { ...data });
    this.updateList();
  };

  render() {
    const { list, flash, error, loading } = this.state;
    // TODO table
    return (
      <div>
        <p>{flash && flash}</p>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Input type="number" name="id" placeholder="id" />
            <Input type="text" name="text" placeholder="text" />
            <Input type="text" name="type" placeholder="type" />
            <Input type="text" name="value" placeholder="value" />
            <button type="submit">Save</button>
          </Form>
        </div>
        {!loading ? (
          <ul>
            {list &&
              list.map(item => (
                <li key={item.id}>
                  {`${item.text} || ${item.type} || ${item.value}`}
                  <button>edit</button>
                  <button
                    onClick={() => {
                      this.removeItem(item.id);
                    }}
                  >
                    x
                  </button>
                </li>
              ))}
          </ul>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

export default List;
