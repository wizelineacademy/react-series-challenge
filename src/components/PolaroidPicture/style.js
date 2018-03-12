import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const PolaroidListItem = styled.li`
  position: relative;
  width: ${props => props.isSingleView ? '500px;' : '200px;'}
  height: ${props => props.isSingleView ? '650px;' : '250px;'}
  display: inline-block;
  padding: 10px;
  margin: 10px;
  background-color: white;
  box-shadow: 7px 7px 4px black;
  border: 1px solid #000
  img {
    max-width: 100%;
    height: 80%;
  }
`
export const PolaroidLink = styled(Link)`
  color: white;
`

export const PolaroidStar = styled.div`
  background-image: url('/favorited.ico');
  background-size: contain;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  right: calc(50% - 25px);
`

export const PolaroidButton = styled.button`
  margin: 5px;
  padding: 10px 19px;
  margin: 0px 10px -10px 0px;
  border-radius: 10px;
  font-family: 'Pacifico', cursive;
  font-size: 17px;
  color: #FFF;
  text-decoration: none; 
  border: none;
  outline:none;
  cursor: pointer;
  display: none;
  ${ props => props.color === 'blue' ?
      `
        background-color: #3498DB;
        text-shadow: 0px -2px #2980B9;
      `
      :
      `
        background-color: #82BF56;
        text-shadow: 0px -2px #669644;
        float: right;
      `
  }
  :active {
    transform: translate(0px,5px);
    -webkit-transform: translate(0px,5px);
    border-bottom: 1px solid;
  }
`

export const PolaroidLoading = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 10px;
  background-image: url("/loader.svg");
  background-size: contain;
  background-color: black;
`