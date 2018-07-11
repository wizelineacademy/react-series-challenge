import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-itmes: center;
    font-size: 3rem
    color: white
`;

const NotFound = () => {
  return <Container>No found, error 404</Container>
};

export default NotFound;
