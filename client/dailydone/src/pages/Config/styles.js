import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* background: #333; */

  /* min-height: calc(100vh - 150px); */

  .nothing-box {
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .teal-btn {
    background-color: teal;
    color: #fff;
    font-weight: bold;
    padding: 3px 10px;
    margin-right: 5px;
    width: 70px;
    /* flex: 2; */
  }

  h3 {
    margin-bottom: 20px;
  }
`;

export const FormBox = styled.div`
  border-bottom: 2px solid white;
  min-width: 300px;
  display: flex;
  justify-content: center;

  label {
    margin-top: 10px;
  }

  form {
    padding: 5px;
    background-color: transparent;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    input {
      width: 70px;
      text-align: center;
      margin-left: 10px;
      padding: 3px 0;
      margin: 5px;
    }
  }

  .save-btn {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
`;

export const TypesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: transparent;
  border-bottom: 2px solid white;
  padding: 10px 0 20px 0;

  h4 {
    margin: 20px 0 10px 0;
  }

  ul {
    padding-bottom: 10px;
  }

  li {
    min-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
      width: 50px;
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

  form {
    display: flex;
    justify-content: space-between;

    label {
      flex: 3;
      margin-left: 10px;
      padding: 5px;
    }

    input {
      width: 100px;
      margin: 0 10px;
      text-align: center;
      flex: 2;
    }
  }
`;
