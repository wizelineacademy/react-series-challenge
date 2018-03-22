import styled from "styled-components";

const Star = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 21;

  &:after {
    content: '★';
    font-size: 30px;
    color: ${ props => props.starred ? "yellow" : "silver" };
    top: 3px;
  }

  &:hover:after {
    color: yellow;
  }

  &:active:after {
    color: silver;
  }

`;

export default Star;
