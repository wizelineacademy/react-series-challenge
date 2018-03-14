import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
 `;

export const SearchWrapper = styled.div`
  display: inline-flex;
  width: -moz-available;
  width: -webkit-fill-available;
  margin: 0 200px;
`;

export const SearchInput = styled.input`
  background-color: #FFFFFF;
  border: solid 1px #FFFFFF;
  color: #000000;
  display: inline-block;
  font-size: 20px;
  height: 62px;
  margin: 50px 12px;
  padding: 0 10px;
  width: 100%;

  :focus {
    outline: none;
  }
`;

const Btn = styled.img`
  cursor: pointer;
  height: 64px;
`;

export const SearchBtn = Btn.extend`
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  margin-top: 50px;
`;

export const NavigationBtn = Btn.extend`
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  margin-top: 50px;
  margin-left: 10px;
`;

export const TrendingGifCards = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  margin: 0 160px;
  overflow: auto;
`;
