import styled from 'styled-components';

export const Wrapper = styled.div`
 padding: 15px;
`

export const LabelStyled = styled.label`
  color: white;
`
export const InputStyled = styled.input`
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + ${LabelStyled} {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + ${LabelStyled}:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
  }

  // Box hover
  &:hover + ${LabelStyled}:before {
    background: #ffd34e;
  }
  
  // Box focus
  &:focus + ${LabelStyled}:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  &:checked + ${LabelStyled}:before {
    background: #ffd34e;
  }
  
  // Disabled state ${LabelStyled}.
  &:disabled + ${LabelStyled} {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + ${LabelStyled}:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + ${LabelStyled}:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }

`;
