import React from 'react';
import Nav from './Nav';

import { Container, NavLink } from './styles';

export default function Header({ setDateType }) {
  return (
    <Container>
      <NavLink to="/">
        <h3>JobsDone</h3>
      </NavLink>
      <span style={{ color: 'orange' }}>TODO Login logic</span>
      <Nav setDateType={setDateType} />
    </Container>
  );
}
