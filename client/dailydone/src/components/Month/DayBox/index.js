import React from 'react';

import { Container, Bar } from './styles';
const DayBox = ({ item }) => {
  return (
    <Container>
      <h4>{item.day}</h4>
      <Bar height={item.total} />
      <p>total: {item.total}</p>
    </Container>
  );
};

export default DayBox;
