import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: inline-block;
  height: 100%;
  margin: 0 200px;
  width: -moz-available;
  width: -webkit-fill-available;
 `;

export const SearchWrapper = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const SearchInput = styled.input`
  background-color: #FFFFFF;
  border: solid 1px #FFFFFF;
  color: #000000;
  display: inline-block;
  font-size: 20px;
  height: 62px;
  margin: 20px 12px;
  padding: 0 10px;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.img`
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  cursor: pointer;
  height: 64px;
  margin-top: 20px;
  width: 64px;
`;
