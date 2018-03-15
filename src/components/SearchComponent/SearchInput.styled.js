import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputContainer  =  styled.div`
  display: flex;
  height: 52px;
  border: 1px solid black;
  margin: 0px 100px;
`

export const SearchInput =  styled.input`
  background-color: #fff;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 0;
  font-weight: 400;
  width: 100%;
  border: 0;
  margin: 0;
  height: 52px;
  letter-spacing: 1px;
  font-size: 18px;
  
`
export const SearchLink = styled(Link)`
  height: 52px;
  width: 52px;
  line-height: 58px;
`
export const SearchButton = styled.img`
  height: 100%;
`

export const TitleStyled = styled.h2`
  color: white;
`;