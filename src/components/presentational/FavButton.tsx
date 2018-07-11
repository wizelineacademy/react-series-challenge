import * as React from 'react';
import FavButtonStyled from './FavButton.style';

interface IFavButtonProps {
    active?: boolean
    onAddFavorite?: any
}

const FavButton = (props: IFavButtonProps) =>
    <FavButtonStyled active={props.active}
        onClick={props.onAddFavorite}>♥</FavButtonStyled>;

export default FavButton;