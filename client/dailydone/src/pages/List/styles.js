import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 12px;
  background: #333;
  height: 90vh;
`;

export const TasksList = styled.div`
  padding: 0 20px;

  li {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 5px 0;

    span {
      padding: 3px;
      margin: 0 5px;
      text-align: center;
      min-width: 100px;
      border-bottom: 1px solid white;
      border-right: 1px solid white;
    }

    .text {
      min-width: 200px;
      /* text wrap */
    }

    .type,
    .value,
    .time {
      min-width: 100px;
      max-width: 200px;
    }

    button {
      display: none;
      padding: 0 10px;
      margin: 0 5px;
      border-radius: 2px;
    }

    :hover {
      button {
        display: inline;
      }
    }
  }
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
    min-width: 200px;
    max-width: 800px;
  }

  [name='type'],
  [name='value'],
  [name='duration'] {
    min-width: 50px;
    max-width: 100px;
  }
`;

export const FormInput = styled(Input)`
  margin: 0 2px;
  text-align: center;
  padding: 5px;
  text-transform: capitalize;
`;
