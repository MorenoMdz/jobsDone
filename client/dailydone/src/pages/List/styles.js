import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  background: #333;
  height: 100%;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: transparent;

  button {
    color: #fff;
    background-color: teal;
    padding: 5px;
    margin: 0 5px;
    width: 100px;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: 1px 1px 1px #555;
  }

  [name='text'] {
    width: 400px;
  }
`;

export const FormInput = styled(Input)`
  margin: 0 2px;
  text-align: center;
  padding: 5px;
  text-transform: capitalize;
`;
