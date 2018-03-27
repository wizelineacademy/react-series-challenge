
import styled from 'styled-components'
import Theme from '../Theme'



const { primary } = Theme

const NavbarStyled = styled.nav`
color: #fff;
background-color: ${primary};
width: 100%;
height: 56px;
line-height: 56px;
display:flex;
justify-content:center;
align-items:center;

margin:0;
`


export default NavbarStyled