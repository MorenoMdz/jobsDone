import React from 'react';
import { Container, Navigation } from './styles';

export default function Nav() {
  return (
    <Container>
      <Navigation activeClassName="selected" to="/today">
        Diário
      </Navigation>
      <Navigation activeClassName="selected" to="/week">
        Semanal
      </Navigation>
      <Navigation activeClassName="selected" to="/month">
        Mensal
      </Navigation>
    </Container>
  );
}
