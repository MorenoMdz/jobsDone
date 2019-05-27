import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  border-bottom: 2px solid white;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1, 2rem;
  font-weight: bold;
  margin: 0 20px 0 25px;

  text-decoration: none;
  cursor: pointer;
`;
