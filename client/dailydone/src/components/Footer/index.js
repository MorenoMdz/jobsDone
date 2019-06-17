import React from 'react';
import { Container, MetaBar, OverlapBar } from './styles';

export default function Footer({ total, meta, currency }) {
  console.log(total);
  if (total.from === 'month') {
    meta = meta * 30;
    console.log('month', meta);
  }
  const percent = Math.floor((total.value * 100) / meta);
  const percentWidth = 500 - Math.floor((percent * 500) / 100);
  const star = total.value - meta > 0;

  return (
    <Container>
      <div>
        {star && <span>&#9734;</span>}
        {!total.value || !currency ? <span>loading</span> : <span>Done:{` ${currency} ${total.value}`}</span>}
        <MetaBar className="meta-bar" />
        <OverlapBar className="overlap-bar" width={(percentWidth > 0 && percentWidth) || 0} />
      </div>
    </Container>
  );
}
