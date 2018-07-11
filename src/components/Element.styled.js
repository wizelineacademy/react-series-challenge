import styled from 'styled-components';


const RelativeDiv = styled.div`
    position: relative;
`;

const IconFavBlue = styled.i`
    color: blue;
`;

const ElementImg = styled.img`
    display: block;
    border: 0;
    width: 100%;
    height: 150px;
    max-height: 150px;
    // height: auto;
`;

const FavBtn = styled.button`
    position: absolute;
    visibility: hidden;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.4rem;
    background: transparent;
    border: none;
    color: ${(props) => props.isFavorite ? '#E93D44' : '#FFF'};
    cursor: pointer;
    
    &:focus {
        outline: none !important;
    }
`;

export {
    RelativeDiv,
    ElementImg,
    FavBtn,
    IconFavBlue
};