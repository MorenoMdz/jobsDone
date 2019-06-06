import React from 'react';

import Config from '../../../pages/Config';

import { Container, ConfigBox, Navigation, Button } from './styles';

export default function Nav() {
  const toggleConfig = () => {
    document.getElementById('config-box').classList.toggle('active');
    // console.log(btn);
  };

  return (
    <Container>
      <Navigation activeClassName="selected" to="/today">
        Today
      </Navigation>
      <Navigation activeClassName="selected" to="/week">
        Week
      </Navigation>
      <Navigation activeClassName="selected" to="/month">
        Month
      </Navigation>
      <Button onClick={toggleConfig}>&#9881;</Button>
      <ConfigBox id="config-box">
        <Config />
      </ConfigBox>
    </Container>
  );
}
