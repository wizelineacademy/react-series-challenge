import React from "react";

import image from "./404.gif";
import { NotFoundWrapperStyled } from "./NotFound.styled";

const NotFound = () => (
  <NotFoundWrapperStyled>
    <img src={image} alt="Not Found" />
  </NotFoundWrapperStyled>
);

export default NotFound;
