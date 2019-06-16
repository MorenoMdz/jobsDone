import React from 'react';
import Nav from './Nav';

import { Container, NavLink } from './styles';

export default function Header({ setDateType }) {
  return (
    <Container>
      <NavLink to="/">
        <h3>DailyDone</h3>
      </NavLink>
      <span style={{ color: 'orange' }}>TODO Footer monthly meta || Login logic</span>
      <Nav setDateType={setDateType} />
    </Container>
  );
}
