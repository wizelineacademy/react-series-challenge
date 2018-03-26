import styled from 'styled-components';

const GifPreview = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  float: left;
  overflow:hidden;

  img{
    min-height: 100px;
    min-width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-height: 100px;
  }
`;

const Heart = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  svg
  {
    width: 20px;
    fill: rgb(233, 61, 68);
  }
`
export {
  GifPreview, Heart
};