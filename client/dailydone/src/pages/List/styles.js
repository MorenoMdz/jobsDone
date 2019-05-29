import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 12px;
  background: #333;
  height: 85vh;

  .teal-btn {
    background-color: teal;
    color: #fff;
    padding: 3px 10px;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  margin: 10px 0;
  text-align: center;

  span {
    padding: 3px;
    margin: 0 5px;
    min-width: 100px;
    max-width: 200px;
    background: #555;
  }

  span:first-child {
    min-width: 200px;
  }
`;

export const TasksList = styled.div`
  padding: 0 20px;

  li {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 5px 0;
    opacity: 0.8;

    :nth-child(even) {
      background-color: #444;
    }

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
      padding: 3px 10px;
      margin: 0 3px;
      border-radius: 2px;
      font-weight: bold;
    }
    .edit-btn {
      color: #fff;
      background-color: #00b8ff;
      margin-left: 5px;
    }

    .remove-btn {
      color: #fff;
      background-color: #bd00ff;
    }

    :hover {
      opacity: 1;
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
  margin: 0 10px;
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
`;
