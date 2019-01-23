import styled from 'styled-components';


const RelativeDiv = styled.div`
    position: relative;
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: rgba(0,0,0,0.0);
    transition: background-color 0.2s ease;
    
    &:hover {
        background-color: rgba(0,0,0,0.7);
    }
`;

const IconFavBlue = styled.i`
    color: blue;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    ${Shadow}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;
const IconFav = styled.i`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    visibility: hidden;
    
    ${Shadow}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

const ElementImg = styled.img`
    display: block;
    border: 0;
    width: 100%;
    height: 150px;
    max-height: 150px;
`;



export {
    RelativeDiv,
    ElementImg,
    IconFavBlue,
    IconFav,
    Shadow
};