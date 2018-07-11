import styled from 'styled-components';

export const ContentGif = styled.div`
    background-color: ${props => props.favorite ? '#b5c4de' : '#edf0f5'};
    float: left;
    width: 220px;
    margin: 6px;
    border-radius: 4px;
    min-height: 175px;
`;

export const Icon = styled.i`
    position: absolute;
    margin-left: 197px;
    margin-top: 8px;
    color: #e7f52b;
`;

export const Image = styled.img`
    width: 100%;
    height: 120px;
`;

export const ImageDescription = styled.span`
    font-family: sans-serif;
    padding: 3px 7px;
    border-radius: 5px;
    display: block;
    width: calc(100% - 30px);
    margin: 8px;
    text-transform: uppercase;
    font-size: 11px;
    color: #1b809e;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #fff;
    :hover {
        white-space: initial;
        overflow: visible;
        color: #1b6ac9;
    }
`;

