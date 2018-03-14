import styled from 'styled-components'

export const StyledImg = styled.img`
  :hover {
    opacity: 0.6;
  }
`
export const LoveItem = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
  color: ${({isFavorite}) => isFavorite ? 'red' : 'white'};
  display: none;
`

export const GifWrapper = styled.div`
  cursor: pointer;
  position: relative;

  :hover {
    div {
      display: block;
    }
  }
`
