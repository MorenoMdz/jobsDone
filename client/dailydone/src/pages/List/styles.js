import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  background: #333;
  flex: 1;
  min-height: calc(100vh - 150px);

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
  width: 1024px;
  /* background: orange; */

  span:first-child {
    width: 475px;
  }
  span {
    padding: 3px;
    margin: 0 5px;
    width: 123px;
    background: #555;
  }
`;

export const TasksList = styled.div`
  /* padding: 0 20px; */
  width: 1024px;

  .nothing-box {
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
    }

    .text {
      width: 475px;
    }

    .type,
    .value,
    .time,
    .duration {
      width: 123px;
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
      margin-left: 5px;
    }

    [level='1'] {
      color: #fff;
      background-color: #bd00ff;
      padding: 2px;
      max-width: 60px;
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
  background-color: transparent;

  form {
    width: 100%;
    margin-left: 15px;
  }

  button {
    color: #fff;
    background-color: teal;
    padding: 5px;
    margin: 0 15px;
    width: 100px;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: 1px 1px 1px #555;
  }

  input {
    padding: 3px;
    margin: 0 5px;
    outline: none;
  }

  [name='text'] {
    width: 475px;
  }

  [name='type'],
  [name='value'],
  [name='duration'] {
    width: 123px;
  }

  input:invalid {
    background: #ccc;
  }
  input:required:focus {
    border: 1px solid teal;
    outline: none;
  }
  input:required:hover {
    opacity: 1;
  }
`;

export const FormInput = styled(Input)`
  margin: 0 2px;
  text-align: center;
  padding: 5px;
`;
