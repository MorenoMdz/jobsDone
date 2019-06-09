import React from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container, FormBox, FormInput, LinkBox } from './styles';

export default function Signup() {
  return (
    <Container>
      <div className="logo">
        <h3>JobsDone</h3>
      </div>
      <Form>
        <FormBox>
          <FormInput type="text" name="username" placeholder="Username" />
          <FormInput type="text" name="email" placeholder="Email" />
          <FormInput type="password" name="password" placeholder="Password" />
          <FormInput type="password" name="password-confirmation" placeholder="Confirm your password" />
          <button type="submit">Register</button>
        </FormBox>
      </Form>
      <LinkBox>
        <Link to="/">Login</Link>
      </LinkBox>
    </Container>
  );
}
