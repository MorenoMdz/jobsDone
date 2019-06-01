import React from 'react';
import { Container, MetaBar, OverlapBar } from './styles';

export default function Footer(props) {
  const percent = Math.floor((props.total * 100) / 1000);
  const percentWidth = 500 - Math.floor((percent * 500) / 100);
  console.log(percentWidth);
  return (
    <Container>
      <div>
        <span>total: {props.total}</span>
        <MetaBar className="meta-bar" />
        <OverlapBar className="overlap-bar" width={(percentWidth > 0 && percentWidth) || 0} />
      </div>
    </Container>
  );
}
