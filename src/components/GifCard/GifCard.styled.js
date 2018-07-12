import styled from 'styled-components';

const GifContainer = styled.div`
    position: relative;
`;

const GifOverlay = styled.div`
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

const GifTitle = styled.div`
    visibility: hidden;
    font-size: 1rem;
    padding: 8px;
    
    ${GifOverlay}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

const GifOverlayLoading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    background-color: rgba(0,0,0,0.9);
    text-align: center;
`;

const Gif = styled.img`
    display: block;
    border: 0;
    width: 100%;
    height: 150px;
    max-height: 150px;
    // height: auto;
`;

const FavoriteBtn = styled.button`
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
    
    ${GifOverlay}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

export {
    GifContainer,
    GifOverlay,
    GifTitle,
    GifOverlayLoading,
    Gif,
    FavoriteBtn,
};