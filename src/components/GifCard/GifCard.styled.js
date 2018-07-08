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
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: rgba(0,0,0,0.7);
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

export {
    GifContainer,
    GifOverlay,
    GifOverlayLoading,
    Gif,
};