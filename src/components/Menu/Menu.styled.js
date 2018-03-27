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
`;
const MenuButton = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: block;
  
  b {
    width: 30px;
    height: 30px;
    box-shadow: 0 0 10px #000;
    display: block;
    background-color: #A59EC7;
    color: #fff;
    border-radius: 30px;
    line-height: 30px;
    text-align: center;
    cursor:pointer;
  }
  a
  {
    width: 30px;
    height: 30px;
    box-shadow: 0 0 10px #000;
    display: block;
    background-color: rgb(233, 61, 68);;
    color: #fff;
    border-radius: 30px;
    line-height: 30px;
    text-align: center;
    svg
    {
      width: 20px;
      fill: #fff;
    }
  }
  a.favorite
  {
    position: absolute;
    top: -35px;
    svg
    {
      margin-top: 7px;
    }
  }
  a.trending
  {
    position: absolute;
    top: -70px;
    svg
    {
      width: 15px;
      margin-top: 5px;
    }
  }
`
export {
  Giphy, MenuButton
};