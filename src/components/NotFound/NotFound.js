import React from "react";
import { WrapperStyled } from "./NotFound.styled";
import image from "./404.gif";

const NotFound = () => (
  <WrapperStyled>
    <img src={image} alt="Not Found" />
  </WrapperStyled>
);

export default NotFound;
