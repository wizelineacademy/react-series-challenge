import styled from 'styled-components';
import { FavButton } from '../ListGifs/ListGifs.styled';

const GifDetailViewStyled = styled.div`
display: block;
margin: 1em auto;
max-width: 80%;
width: 100%;
position: relative;
    img {
        display: block;
        width: 100%;
        height: auto;
    }
    ${FavButton} {
        position: absolute;
        top: .5em;
        right: .5em;
    }
`;

export {
    GifDetailViewStyled
}