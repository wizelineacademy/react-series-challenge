import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  float: left;
  width: 50px;
  button {
    height: 60px;
  }
`;

const Button = props => {
  const { title } = props;
  return (
    <StyledButton>
      <button>{title}</button>
    </StyledButton>
  );
};

export default Button;
