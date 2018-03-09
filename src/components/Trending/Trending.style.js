import styled from 'styled-components'

export const TrendingWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const GifList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 1700px;
  margin: 0 20% 5% 20%;
`

export const GifItem = styled.div`
  padding: 5px;
`
export const StyledTitle = styled.h1`
  color: white;
  margin: 0;
  padding: 10px;
`
export const StyledButton = styled.div`
  position: absolute;
  color: white;
  cursor: pointer;

  :hover {
    color:red;
  }
`
