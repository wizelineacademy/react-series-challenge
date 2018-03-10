import styled from "styled-components";

import { getColor } from "../../../utils";

const ImageTagStyled = styled.div`
  width: ${props => props.size || 300}px;
  height: ${props => props.size || 300}px;
  background: ${props => (props.src ? "url(" + props.src + ")" : getColor())};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export { ImageTagStyled };
