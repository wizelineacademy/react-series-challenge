import styled from "styled-components";

export const AppStyledDiv = styled.div`
  text-align: center;
`;

export const StyledFavButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: 2px solid;
  border-color: ${props => props.add ? 'green' : 'red'}
  border-radius: 100px;
  width: 150px;
  background-size: 100%;
`;

export const StyleDivNoResults = styled.div`
  float:left;
  text-align:center;
  font-weight:bold;
  font-size:large;
`

export const StyledGifContainer = styled.div`
  float:left;
  text-align:center;
  font-weight:bold;
  font-size:large;
  padding:5px;
  border: 3px solid;
  width:350px;
`

export const StyledFavImg = styled.img`
  height:50px;
`

export const StyledGifImg = styled.img`
  height:180px;
  padding:4px;
`
//props =>
