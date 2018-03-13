import styled from 'styled-components'

export const GifWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const GifStyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 2100px;
  width: 1000px;
  padding: 5px;
  margin: auto;
`

export const GifItemWrapper = styled.div`
  margin: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  .favorite {
    visibility: hidden;
  }

  :hover {
    .favorite {
      visibility: visible;
    }
  }
`
export const FavoriteButton = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 5px 0 0 5px;
`
