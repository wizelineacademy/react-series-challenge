import styled from 'styled-components';

export const Wrapper = styled.div``

export const CardStyled = Wrapper.extend`
  max-width: 70%;
  max-height: 700px;
  background-color: #fff;
  margin-left: 15%;
  margin-top: 20px;
  padding: 9px;
  display: block;
  text-align: center;

  a {
    display: block;
  }
`;

export const ListWrapperStyled = Wrapper.extend`
  overflow-y: auto;
  width: 100%;
  margin-top: 10px;
  padding-left: 30px;
`;

export const ListItemStyled = Wrapper.extend`
  width: 30%;
  height: 300px;
  background-color: #fff;
  display: inline-block;
  margin: 5px;
  padding: 7.5px;
`;

export default {
  Wrapper,
  CardStyled,
  ListWrapperStyled,
  ListItemStyled
};
