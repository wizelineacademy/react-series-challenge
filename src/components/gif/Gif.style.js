import styled from 'styled-components';


export const StyledGif = styled.div.attrs({
  style: props => ({
    background: props.bgColor(),
  })
})`
  width: auto;
  margin: 1em;
  display: flex;
  min-width: 66px;
  position: relative;
  :hover span {
    visibility: visible;
  }
`