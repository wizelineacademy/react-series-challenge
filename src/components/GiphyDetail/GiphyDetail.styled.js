import styled from 'styled-components';

const Giphy = styled.div`

  .image{
    position:relative
  }
  img{
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`
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
  Giphy, Heart
};