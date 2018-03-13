import React from "react";
import { createPortal } from "react-dom";

import { LoaderStyled } from "./Loader.styled";

export default () => createPortal(<LoaderStyled />, document.body);
