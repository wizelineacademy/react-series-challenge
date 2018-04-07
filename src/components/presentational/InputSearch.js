import React from 'react';
import styled from 'styled-components';

const SectionInput = styled.section`
  position: fixed;
  top: 49px;
  width: 100%;
  height: 40px;
  z-index: 101;
  text-align: center;
  & input {
    background-color: white;
    padding: 5px;
    font-size: 24px;
    text-align: center;
    color: gray;
    width: 93%;
    height: 100%;
    border: solid 1px lightgrey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 500px) {
    margin-left: -15px;
    top: 76px;
    width: 100%;
    & input {
      padding: 5px;
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border: none;
      border-bottom: solid 1px lightgrey;
    }
  }
`;

const InputSearch = (props) => {
 return (
  <SectionInput>
    <input type='search' {...props} onFocus={(el) => el.target.select()} />
  </SectionInput>
 );
};

export default InputSearch;