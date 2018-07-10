import styled from 'styled-components';

export const GifCardWrapper = styled.div`
  position: relative;
`

export const GifCardUser = styled.a`
  left: 5px;
  position: absolute;
  top: 5px;

  & > img {
    height: 20px;
    width: 20px;
  }
`

export const GifCardStar = styled.img`
  cursor: pointer;
  height: 35px;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 35px;
`

export const GifCardMainImage = styled.img`
  width: 100%;
`
