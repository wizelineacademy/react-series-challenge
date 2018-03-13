import styled from 'styled-components'

export const StyledImg = styled.img`
  :hover {
    box-shadow: 10px 10px 5px grey;
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
    img {
      opacity: 0.6;
    }
    div {
      display: block;
    }
  }
`
