import styled from 'styled-components';

export const Container = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #11464e;
  border-radius: 3px;
  margin: 5px;
  padding: 15px;
`;

const getBarHeight = height => height / 20;

const getBarColor = height => {
  if (height > 500 && height < 1000) return `#3fffa2`;
  if (height >= 1000) return `#ffdb3a`;
  return `#e5405e`;
};

export const Bar = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* background: #3fffa2; */
  background: ${props => getBarColor(props.height)};
  /* background: linear-gradient(to top, #e5405e 0%, #ffdb3a 25%, #3fffa2 50%, #3fffa2 50%, #1a9be0 73%, #ba68ed 100%); */
  width: 50px;
  height: ${props => `${getBarHeight(props.height)}px`};
  max-height: 80px;
  margin: 5px;
`;
