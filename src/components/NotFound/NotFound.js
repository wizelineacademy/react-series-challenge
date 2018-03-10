import React from "react";
import { NotFoundWrapperStyled } from "./NotFound.styled";
import image from "./404.gif";

const NotFound = () => (
  <NotFoundWrapperStyled>
    <img src={image} alt="Not Found" />
  </NotFoundWrapperStyled>
);

export default NotFound;
