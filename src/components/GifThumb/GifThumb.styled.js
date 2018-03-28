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
  span
  {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 20px;
    padding: 0 10px;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    font-size: 10px;
  }
`;

const Heart = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  svg
  {
    width: 20px;
    fill: rgb(233, 61, 68);
  }
`
export {
  GifPreview, Heart
};