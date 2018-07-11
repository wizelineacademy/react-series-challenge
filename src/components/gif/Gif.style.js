import styled from 'styled-components';


export const StyledGif = styled.div.attrs({
  style: props => ({
    background: props.bgColor(),
  })
})`
  display: flex;
  min-width: 66px;
  position: relative;
  .like-status {
    position: absolute;
    padding: .1em;
    pointer-events: none;
    visibility: hidden;
  }
  &:hover .like-status {
    visibility: visible;
  }
`