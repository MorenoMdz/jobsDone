import React, { Component } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import { Container, FormBox, FormInput, LinkBox, LoadingBox, ErrorBox } from './styles';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  handleSubmit = async data => {
    this.setState({ loading: true });
    const { username, email, password, password_confirmation } = data;
    const clearError = () => setTimeout(() => this.setState({ error: '' }), 3000);
    if (!email || !password) {
      return this.setState({ error: 'Username, email and password required', loading: false }, clearError);
    }
    if (password !== password_confirmation) {
      return this.setState({ error: 'Passwords do not match', loading: false }, clearError);
    }
    try {
      await api.post('users', {
        username,
        email,
        password,
      });
      const response = await api.post('sessions', {
        email,
        password,
      });
      await login(response.data.token, response.data.user_id);
      clearTimeout(clearError);
      this.props.history.push('/list');
    } catch (error) {
      this.setState({ error: 'An error ocurred, try again', loading: false }, clearError);
    }
  };

  render() {
    const { error, loading } = this.state;
    return (
      <Container>
        <div className="logo">
          <h3>JobsDone</h3>
        </div>
        <ErrorBox>{error}</ErrorBox>
        {loading ? (
          <LoadingBox>
            <p>loading...</p>
          </LoadingBox>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <FormBox>
              <FormInput type="text" name="username" placeholder="Username" />
              <FormInput type="email" name="email" placeholder="Email" />
              <FormInput type="password" name="password" placeholder="Password" />
              <FormInput type="password" name="password_confirmation" placeholder="Confirm your password" />
              <button type="submit">Register</button>
            </FormBox>
          </Form>
        )}
        <LinkBox>
          <Link to="/">Login</Link>
        </LinkBox>
      </Container>
    );
  }
}

export default Signup;
