import styled, { css } from 'styled-components';

const sharedStyle = css`
  border-radius: 3px;
  user-select: none;
  transition: all .3s;
  cursor: pointer;
  background-color: #333;

  &:hover {
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    background-color: #dee3eb;
  }
`;

const GiftContainer = styled.div `
  ${sharedStyle}
  width: 120px;
  height: 120px;
  margin: 10px;

  h3 {
    padding: 15px;
    text-transform: capitalize;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: inline-block;
    margin-top: 12%;
    font-size: 15px;
    background: white;
    padding: 10px;
    color: #22206b;
    border-radius: 10px;
  }
`;

export {
    GiftContainer,
  };
  
