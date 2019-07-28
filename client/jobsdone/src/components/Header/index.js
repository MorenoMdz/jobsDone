import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Nav from './Nav';

import { Container, NavLink } from './styles';

const Header = ({ setDateType, selected }) => {
  const [userData, setUserData] = useState([]);

  async function fetchUser() {
    const userId = localStorage.getItem('@jobsdone-id');
    const response = await api.get(`users/${userId}`);
    setUserData(response.data);
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <NavLink to="/list">
        <h3>JobsDone</h3>
      </NavLink>
      <span>Welcome back, {userData.username}</span>
      <Nav setDateType={setDateType} selected={selected} />
    </Container>
  );
};

export default Header;
