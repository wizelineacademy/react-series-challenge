import * as React from 'react';
import styled from 'styled-components';

const _button = styled.button`
    background: none;
    position: absolute;
    right: 10px;
    top: 10px;
    height: 32px;
    font-size: 20px;
    line-height: 32px;
    color: ${(props: any) => props.active ? "#FC4349" : "#FFF"};
    opacity: 0.7;
    border: none;
    width: 32px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.25s;

    :hover {
        opacity: 1.0;
    }
`;

interface IFavButtonProps {
    active: boolean
    onAddFavorite?: any
}
const FavButton = (props: IFavButtonProps) =>
    <_button onClick={props.onAddFavorite} active={props.active}>♥</_button>;

export default FavButton;