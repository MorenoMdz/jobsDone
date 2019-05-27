import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 12px;
  background: teal;

  .selected {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const Navigation = styled(NavLink)`
  color: #ccc;
  font-size: 1, 2rem;
  font-weight: bold;
  margin: 0 20px 0 25px;

  text-decoration: none;
  cursor: pointer;
`;
