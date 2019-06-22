import styled from 'styled-components';

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
  .selected {
    opacity: 1;
  }
`;

export const Button = styled.div`
  color: #fff;
  font-size: 1.2rem;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  opacity: 0.8;
`;

export const ConfigBox = styled.div`
  position: absolute;
  padding: 25px;
  top: 70px;
  background-color: #222;
  display: none;
  z-index: 2;
`;
