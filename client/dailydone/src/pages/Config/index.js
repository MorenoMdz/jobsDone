import React, { Component, Fragment } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConfirmButton from '../../components/ConfirmButton';

import { Container, FormBox, TypesBox } from './styles';

class Config extends Component {
  state = {
    types: [
      { id: 'repair', title: 'Reparo' },
      { id: 'warranty', title: 'Garantia' },
      { id: 'eval', title: 'Orçamento' },
      { id: 'courtesy', title: 'Cortesia' },
      { id: 'sale', title: 'Venda' },
    ],
    currency: '$',
    dailyMeta: '',
    editingTypeId: '',
  };

  componentDidMount() {
    this.updateList();
  }

  updateList = async () => {
    // const response = await api.get('completed');
    // this.setState({ list: response.data, loading: false, editingItemId: '' });
  };

  removeItem = async id => {
    this.setState({ loading: true });
    // await api.delete(`completed/${id}`);
    // this.updateList();
  };

  editItem = id => {
    this.setState({ loading: false, editingTypeId: id });
  };

  handleUpdate = async data => {
    this.setState({ loading: true });
    // await api.put(`completed/${data.id}`, { ...data });
    // this.updateList();
  };

  handleSubmit = e => {
    // this.setState({ types: e.types });
    console.log(e.currency);
  };

  addType = e => {
    // check if empty
    let input = document.getElementById('title');
    if (!e.title) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
    console.log(input);
  };

  render() {
    const { currency, types, loading, editingTypeId } = this.state;

    const displayType = type => (
      <li key={type.id}>
        <span className="type-title">{type.title}</span>
        <div>
          <button
            className="edit-btn"
            onClick={() => {
              this.editItem(type.id);
            }}
          >
            edit
          </button>
          <ConfirmButton
            className="remove-btn"
            dialog={['X', 'confirm']}
            action={() => {
              this.removeItem(type.id);
            }}
          >
            x
          </ConfirmButton>
        </div>
      </li>
    );

    const editType = type => (
      <li key={type.id}>
        <FormBox>
          <Form onSubmit={this.handleUpdate} initialData={{ ...type }}>
            <Input type="hidden" name="id" /* value={type.id} */ />
            <Input type="text" name="type-title" placeholder={type.text || 'text'} />
            <button type="submit" className="teal-btn">
              Update
            </button>
          </Form>
        </FormBox>
      </li>
    );

    const initialData = {
      meta: 500,
      currency: '$',
    };

    return (
      <Fragment>
        <Header />
        <Container>
          <h3>Your app configuration</h3>
          <FormBox>
            <Form onSubmit={this.handleSubmit} initialData={initialData}>
              <div>
                <label htmlFor="meta">Daily Meta (in {currency})</label>
                <Input type="number" name="daily-meta" placeholder="1000" className="meta" />
              </div>
              <div>
                <label htmlFor="currency">Currency</label>
                <Input type="text" name="currency" placeholder="$" className="currency" required />
              </div>
              <div className="save-btn">
                <button type="submit" className="teal-btn">
                  Save
                </button>
              </div>
            </Form>
          </FormBox>

          <TypesBox>
            <h4>Types</h4>
            <div>
              {!loading ? (
                types.length > 0 ? (
                  <ul>
                    {types && types.map(type => (type.id !== editingTypeId ? displayType(type) : editType(type)))}
                  </ul>
                ) : (
                  <div className="nothing-box">Nothing??</div>
                )
              ) : (
                <p>loading...</p>
              )}
              <Form onSubmit={this.addType}>
                <label htmlFor="title">New Type</label>
                <Input type="text" name="title" /* id="title" */ placeholder={'Type Title'} />
                <button type="submit" className="teal-btn">
                  Add
                </button>
              </Form>
            </div>
          </TypesBox>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

// TODO menu overlay
// TODO styles for type edit

export default Config;
