import styled from 'styled-components';
import { Input, Select } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  background: #333;
  flex: 1;
  min-height: calc(100vh - 150px);
  position: relative;

  .teal-btn {
    color: #ddd;
    font-weight: bold;
    border: 3px #1c6a6c solid;
    background-color: #11464e;
    padding: 3px 10px;
  }

  .save-btn {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    display: inline;
  }
`;

export const TasksList = styled.div`
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
      background-color: #383838;
    }

    span {
      padding: 3px;
      margin: 0 5px;
      text-align: center;
    }

    .text {
      width: 475px;
      text-align: left;
      padding-left: 10px;
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
      cursor: pointer;
    }

    .btn-box {
      width: 102px;
    }

    .edit-btn {
      color: #fff;
      background-color: #00b8ff;
      width: 60px;
    }

    .remove-btn {
      color: #fff;
      background-color: #d900ff;
      /* background-color: #bd00ff; */
      margin-left: 3px;
      text-align: center;
      width: 30px;
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
  z-index: 20;

  form {
    width: 100%;
  }

  button {
    color: #fff;
    font-weight: bold;
    border: 3px #1c6a6c solid;
    background-color: #11464e;
    padding: 5px;
    margin: 0 5px;
    width: 100px;
    font-weight: bold;
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }
  }

  input {
    padding: 3px;
    margin: 0 5px;
    outline: none;
  }

  [name='title'] {
    width: 475px;
    text-align: left;
    padding-left: 10px;
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
  text-align: center;
  padding: 5px;
`;

export const FormSelect = styled(Select)`
  width: 123px;
  margin: 0 2px;
  text-align: center;
  padding: 3px;
`;

export const DateBox = styled.div`
  top: 50px;
  left: 20px;
  background-color: rgba(33, 33, 33, 0.7);
  padding: 10px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
`;

export const ToolBox = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 5px;
    font-weight: bold;
  }
`;
