import React from "react";
import styled from "styled-components";
const StyledInput = styled.div`
  float: left;
  border: 3px solid #d6d3d3;
  padding: 5px;
  height: 45px;
  border-radius: 5px;
  outline: none;
  color: #9dbfaf;
  input {
    width: 400px;
    height: 40px;
    font-size: 30px;
  }
`;

const Input = props => {
  const { type, id, name, placeholder, label } = props;
  return (
    <StyledInput>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-label={label}
      />
    </StyledInput>
  );
};

export default Input;
