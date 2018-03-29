import styled from 'styled-components';
import { COLORS } from '../../utils/ConstantsGraphics';

const ListGifStyled = styled.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
list-style: none;
padding: 0;
margin: 0;
@media only screen and (max-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
}
li{
    background-color: #000;
    cursor: pointer;
    position: relative;
    transition: transform .15s ease-in;
    &:hover {
        transform:scale(1.25, 1.25);
        z-index: 1;
    }
    button {
        position: absolute;
        top: .5em;
        right: .5em;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
`;

const FavButton = styled.button.attrs({
    type: 'button'
}) `
    background: none;
    background-color: ${props => props.faved ? COLORS.primary : COLORS.primaryLighten};
    border: ${props => props.faved ? '#FFF solid .125em' : 0};
    border-radius: .5em;
    box-shadow: ${props => props.faved ? '0 .25em .25em rgba(0,0,0,.6)' : 'none'};
    color: #FFF;
    cursor: pointer;
    font-size: .85em;
    webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    outline: none;
    opacity: ${props => props.faved ? '1' : '.5'};
    transition: background-color .3s ease-in;
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    &:hover {
        background-color: ${COLORS.primary};
    }
`;

export {
    ListGifStyled,
    FavButton
};