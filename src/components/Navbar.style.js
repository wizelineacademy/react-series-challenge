import styled from 'styled-components'

export const UlStyled=styled.ul`
{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
`
export const LiStyled=styled.li`
{
  float: left;
}

a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover {
  background-color: #111;
}
`
export const InputTextStyled=styled.input`
{
    margin-top: 3px
    background-color: #454545
    font-size: 17px
    display: inline-block
    box-sizing: border-box
    padding: 10px 15px 
    font-weight: 12
    letter-spacing: 0.01em
    position: relative
    z-index: 1
    outline-style: none
    border-style:none
    color:white
}
`

export const ButtonTextStyled=styled.button`
{
  border-style:none
  background-color: #333;
  padding: 0px
  color:white
  margin:0px
  font-size: 17px
}
`