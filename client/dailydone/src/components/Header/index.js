import React from 'react';
import Nav from './Nav';

import { Container, NavLink } from './styles';

export default function Header() {
  return (
    <Container>
      <NavLink to="/">
        <h3>DailyDone</h3>
      </NavLink>
      TODO dropdown for days, weeks, months || Login logic
      <Nav />
    </Container>
  );
}
