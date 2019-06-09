import React from 'react';
import { Container, MetaBar, OverlapBar } from './styles';

export default function Footer(props) {
  const { total, meta, currency } = props;
  const percent = Math.floor((props.total * 100) / meta);
  const percentWidth = 500 - Math.floor((percent * 500) / 100);
  return (
    <Container>
      <div>
        {!total || !currency ? <span>loading</span> : <span>Today:{` ${currency} ${total}`}</span>}
        <MetaBar className="meta-bar" />
        <OverlapBar className="overlap-bar" width={(percentWidth > 0 && percentWidth) || 0} />
      </div>
    </Container>
  );
}
