import React, { Component } from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Container, FormBox, FormInput, LinkBox, ErrorBox } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async data => {
    const { email, password } = data;
    if (!email || !password) {
      return this.setState({ error: 'Email and password required' });
    }
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });
      login(response.data.token, response.data.user_id);
      this.props.history.push('/list');
    } catch (error) {
      this.setState({ error: 'Login failed' });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <Container>
        <div className="logo">
          <h3>JobsDone</h3>
        </div>
        <ErrorBox>{error}</ErrorBox>
        <Form onSubmit={this.handleSubmit}>
          <FormBox>
            <FormInput type="text" name="email" placeholder="Your Email" />
            <FormInput type="password" name="password" placeholder="Password" />
            {/* TODO login logic */}
            <button type="submit">Login</button>
          </FormBox>
        </Form>
        <LinkBox>
          <Link to="/signup">Register</Link>
        </LinkBox>
      </Container>
    );
  }
}

export default Login;
