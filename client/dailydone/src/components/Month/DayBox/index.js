import React from 'react';

import { Container, Bar } from './styles';

const DayBox = ({ item, currency, monthStartsAt, isSunday }) => {
  console.log('isSunday', isSunday);
  return (
    <Container hasValue={item.total > 0} style={monthStartsAt ? { gridColumn: monthStartsAt } : {}} isSunday={isSunday}>
      <h4>{item.day}</h4>
      <Bar height={item.total} />
      {item.total > 0 && <span>{`${currency} ${item.total.toFixed(2)}`}</span>}
    </Container>
  );
};

export default DayBox;
