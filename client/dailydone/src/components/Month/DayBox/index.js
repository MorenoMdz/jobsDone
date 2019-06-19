import React from 'react';
import { Container, Bar } from './styles';

const DayBox = ({ item, currency, monthStartsAt, isSunday, setDateType }) => {
  return (
    // TODO nav to day, passing the slug and loading it into the CDM api call, need a new route?
    <Container hasValue={item.total > 0} style={monthStartsAt ? { gridColumn: monthStartsAt } : {}} isSunday={isSunday}>
      <h4>{item.day}</h4>
      <Bar height={item.total} onClick={() => setDateType('day')} />
      {item.total > 0 && <span>{`${currency} ${item.total.toFixed(2)}`}</span>}
    </Container>
  );
};

export default DayBox;
