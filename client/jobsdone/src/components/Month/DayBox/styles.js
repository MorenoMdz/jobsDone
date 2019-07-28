import styled from 'styled-components';

export const Container = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: ${props => getBorderColor(props.hasValue)};
  border-radius: 3px;
  margin: 5px;
  padding: 15px;
  background: ${props => props.isSunday && `#444`};
  background: ${props => props.isFuture && `#222`};

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
  h4 {
    color: ${props => props.isFuture && `#aaa`};
  }
  span {
    font-weight: bold;
  }
`;

const getBorderColor = hasValue => (hasValue ? `2px solid #2DCEC0` : `2px solid #aaa`);

const getBarHeight = height => height / 20;

const getBarColor = height => {
  if (height > 500 && height < 1000) return `#3fffa2`;
  if (height >= 1000) return `#ba68ed`;
  return `#e5405e`;
};

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: ${props => getBarColor(props.height)};
  width: 50px;
  height: ${props => `${getBarHeight(props.height)}px`};
  max-height: 80px;
  margin: 5px;
`;
