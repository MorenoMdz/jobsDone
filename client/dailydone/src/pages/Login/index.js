import React from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container, FormBox, FormInput, LinkBox } from './styles';

export default function Login() {
  return (
    <Container>
      <div className="logo">
        <h3>JobsDone</h3>
      </div>
      <Form>
        <FormBox>
          <FormInput type="text" name="username" placeholder="Username" />
          <FormInput type="password" name="password" placeholder="Password" />
          {/* TODO login logic */}
          <Link to="/list">
            <button type="submit">Login</button>
          </Link>
        </FormBox>
      </Form>
      <LinkBox>
        <Link to="/signup">Register</Link>
      </LinkBox>
    </Container>
  );
}
