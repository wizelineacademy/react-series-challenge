import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: inline-block;
  order: 2;
  flex: 0 1 auto;
  align-self: auto;
  min-width: 0;
  min-height: auto;
`;

const SearchBarBox = styled.input`
  width: 375px;
  display: block;
  border: 1px solid #999;
  height: 25px;
  -webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;

export { SearchBarContainer, SearchBarBox };
