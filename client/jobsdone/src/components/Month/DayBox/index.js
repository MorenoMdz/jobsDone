import React from 'react';
import { Container, Bar } from './styles';

const DayBox = ({ item, currency, monthStartsAt, isSunday, setDateType }) => {
  return (
    <Container
      hasValue={item.total > 0}
      style={monthStartsAt ? { gridColumn: monthStartsAt } : {}}
      isSunday={isSunday}
      onClick={() => setDateType('day', item.slug)}
    >
      <h4>{item.day}</h4>
      <Bar height={item.total} />
      {item.total > 0 && <span>{`${currency} ${item.total.toFixed(2)}`}</span>}
    </Container>
  );
};

export default DayBox;
