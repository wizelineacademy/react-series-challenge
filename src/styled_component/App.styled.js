import styled from 'styled-components';

export const AppStyled = styled.div`
    text-align: center;
`

export const AppHeader = styled.header`
    background-color: #222;
    height: 20px;
    padding: 20px;
    color: white;
`

export const AppTitle = styled.h1`
    font-size: 1.5em;
`

export const HeaderButtons = styled.div`
    a {
        font-weight: 600;
        margin: 50px;   
        text-transform: uppercase;
        color:#67818a;
        font-family: inherit;
        text-decoration: none;
        font-size: 15px;

        &.active{
            color: #FFF;
        }
    }
`