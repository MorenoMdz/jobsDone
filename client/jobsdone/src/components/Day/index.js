import React, { Component } from 'react';
import api from '../../services/api';
import DatePicker from 'react-datepicker';
import { Form } from '@rocketseat/unform';
import { format } from 'date-fns';

import ConfirmButton from '../../components/ConfirmButton';

import { Container, ToolBox, DateBox, FormBox, FormInput, FormSelect, TasksList } from './styles';

class List extends Component {
  state = {
    list: [],
    types: [],
    flash: '',
    error: '',
    editingItemId: '',
    loading: true,
    selectedDate: format(Date.now(), 'YYYY-MM-DD hh:mm:ss'),
    showCalendar: false,
  };

  async componentDidMount() {
    const { selectedDate } = this.props;
    this.fetchTypes();
    this.fetchList(selectedDate);
  }

  toggleCalendar = () => {
    const showCalendar = !this.state.showCalendar;
    this.setState({ showCalendar });
  };

  handleChange = async e => {
    const selectedDate = format(e, 'YYYY-MM-DD hh:mm:ss');
    this.setState({ selectedDate });
    this.fetchList(selectedDate);
    this.toggleCalendar();
  };

  fetchList = async date => {
    const response = await api.get(`search?day=${date}`);
    const flatList = await response.data.map(item => ({ ...item, type: item.type.title }));
    this.setState({ list: flatList, loading: false, editingItemId: '' });
    const total = await this.getTotal();
    const { setTotal } = this.props;
    setTotal({ value: total, from: 'day' });
  };

  fetchTypes = async () => {
    const response = await api.get('types');
    this.setState({ types: response.data });
  };

  getTotal = () => {
    const { list } = this.state;
    let total = list.map(item => parseInt(item.value)).reduce((a, b) => a + b, 0);
    return total;
  };

  removeItem = async id => {
    this.setState({ loading: true });
    await api.delete(`tasks/${id}`);
    const { selectedDate } = this.state;
    this.fetchList(selectedDate);
  };

  editItem = id => {
    this.setState({ loading: false, editingItemId: id });
  };

  handleUpdate = async data => {
    this.setState({ loading: true });
    const { selectedDate } = this.state;
    await api.put(`tasks/${data.id}`, { ...data /* created_at: data.created_at */ });
    this.fetchList(selectedDate);
  };

  handleSubmit = async (data, { resetForm }) => {
    this.setState({ loading: true });
    const { selectedDate } = this.state;
    console.log({ ...data });
    await api.post(`tasks/`, {
      ...data,
    });
    this.fetchList(selectedDate);
    resetForm();
  };

  render() {
    const { list, types, loading, editingItemId, showCalendar } = this.state;
    const { currency, selectedDate } = this.props;

    const displayItem = item => (
      <li key={item.id}>
        <span className="text row">{item.title}</span>

        <span className="type column">
          <span className="show-sm">Type:</span>
          {item.type}
        </span>
        <span className="value column">
          <span className="show-sm">Total:</span>
          {`${currency} ${parseInt(item.value).toFixed(2)}`}
        </span>
        <span className="duration column">
          <span className="show-sm">Duration:</span>
          {item.duration} min
        </span>

        <div className="btn-box column">
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
            <FormInput type="hidden" name="created-at" value={item.created_at} />
            <FormInput type="text" name="title" placeholder={item.title || 'title'} className="row" />
            <FormSelect name="type_id" options={types} required className="column" />
            <FormInput type="number" name="value" placeholder={item.value || 'value'} className="column" />
            <FormInput type="number" name="duration" placeholder={item.duration || 'duration'} className="column" />
            <button type="submit" className="save-btn">
              Update
            </button>
          </Form>
        </FormBox>
      </li>
    );

    return (
      <Container>
        <ToolBox>
          {/* <p>{flash && flash}</p> */}
          <button onClick={this.toggleCalendar} className="teal-btn">
            Select a Day
          </button>
          <span>Day: {selectedDate}</span>
        </ToolBox>
        {showCalendar && (
          <DateBox id="daily-box">
            <DatePicker
              inline
              selected={Date.now()}
              maxDate={new Date()}
              onChange={e => {
                this.handleChange(e, 'day');
              }}
              dateFormat="yyyy/MM/dd"
            />
          </DateBox>
        )}
        <div>
          <FormBox>
            <Form onSubmit={this.handleSubmit}>
              <FormInput type="text" name="title" placeholder="Title" required className="row" />

              <FormSelect name="type_id" options={types} required className="column" />
              <FormInput type="number" name="value" placeholder="Value" required className="column" />

              <FormInput type="number" name="duration" placeholder="Duration" required className="column" />
              <button type="submit" className="column">
                Save
              </button>
            </Form>
          </FormBox>
          <TasksList>
            {!loading ? (
              list.length > 0 ? (
                <ul>{list && list.map(item => (item.id !== editingItemId ? displayItem(item) : editItem(item)))}</ul>
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
