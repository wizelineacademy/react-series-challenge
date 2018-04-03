import React from 'react';
import styled from 'styled-components';

const SectionInput = styled.section`
  position: fixed;
  top: 48px;
  width: 100%;
  height: 40px;
  text-align: center;
  & input {
    padding: 5px;
    text-align: center;
    font-size: 24px;
    color: gray;
    width: 95%;
    height: 100%;
    border: solid 1px lightgrey;
    border-top: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const InputSearch = (props) => {
 return (
  <SectionInput>
    <input type='search' {...props} />
  </SectionInput>
 );
};

export default InputSearch;