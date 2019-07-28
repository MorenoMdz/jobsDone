import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(0, 80, 80, 0.6));
  border-bottom: 2px solid white;
  height: 70px;

  @media (max-width: 499px) {
    span {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1, 2rem;
  font-weight: bold;
  margin: 0 20px 0 25px;

  text-decoration: none;
  cursor: pointer;
`;
