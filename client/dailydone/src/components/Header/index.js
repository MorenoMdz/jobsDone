import React from 'react';
import Nav from './Nav';

import { Container, NavLink } from './styles';

export default function Header({ setDay }) {
  return (
    <Container>
      <NavLink to="/">
        <h3>DailyDone</h3>
      </NavLink>
      <span style={{ color: 'orange' }}>TODO date picker logic || Login logic</span>
      <Nav setDay={setDay} />
    </Container>
  );
}
