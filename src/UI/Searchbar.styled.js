import styled from 'styled-components';
import searchIcon from '../assets/search.png'

export const StyledSearchbar = styled.div`
    padding-top: 50px;
    margin: 50px;  
`

export const StyledInput = styled.input`
    display: inline-block;
    vertical-align: middle;
    line-height: 15px;
    font-size: 15px;
    width: 80%

    border: 2px solid red;
    border-radius: 25px;

    color: #000000;
    background-color: #ffeeee;
    padding: 15px;
    margin-right: 1px;
    margin-bottom: 1px;
`

export const StyledButton = styled.button`
    border-radius: 25px;
    background-image: url(${searchIcon});
    padding: 25px;
    margin-left: 10px;
`