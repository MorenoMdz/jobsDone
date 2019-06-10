import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 12px;
  box-sizing: border-box;

  .active {
    display: block;
  }

  .config {
    font-size: 1.6rem;
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

export const Button = styled.div`
  color: #fff;
  font-size: 1.2rem;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
`;

export const ConfigBox = styled.div`
  position: absolute;
  padding: 25px;
  top: 70px;
  background-color: #222;
  display: none;
  z-index: 1;
`;

export const DailyBox = styled.div`
  position: absolute;
  padding: 25px;
  top: 70px;
  background-color: #222;
  display: none;
  z-index: 1;
`;
