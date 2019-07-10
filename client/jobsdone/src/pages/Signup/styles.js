import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h3 {
    padding: 10px;
    font-size: 1.6rem;
  }
`;
export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  button {
    padding: 5px;
    margin: 3px;
    width: 250px;
    background-color: #11464e;
    color: #ddd;
    font-weight: bold;
    border: 3px #1c6a6c solid;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 260px;
  width: 100px;
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: orange;
  font-weight: bold;
`;

export const FormInput = styled(Input)`
  width: 250px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  width: 250px;

  a {
    text-decoration: none;
    color: #ccc;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  }
`;
