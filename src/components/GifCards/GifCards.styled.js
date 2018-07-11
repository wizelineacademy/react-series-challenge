import styled from 'styled-components';

// Super awesome box shadow effect provided from W3Schools
// Awesome job link: https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow4
export const GifCardsStyled = styled.div`
    display: inline-block;
    background-color: ${props => props.theme.favoritePageBackground};
    padding: 10px;
    margin: 10px;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green;
`

export const StyledH1 = styled.h1`
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;  
`