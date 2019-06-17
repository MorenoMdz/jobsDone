import styled from 'styled-components';

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
  width: 1024px;
  margin: 0 auto;
  display: grid;
  justify-content: space;
  grid-gap: 5px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
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
