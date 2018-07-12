import React, {Component} from 'react';
import InfoPortal from './InfoPortal';
import appActions from '../actions';
import {ButtonStyled, GiphyElementStyled, HrStyled} from './GiphyElement.styled';

class GiphyElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'showInfo': false,
            'giphy': props.giphy,
            'view': props.view
        };
        this.handleShowInfo = this.handleShowInfo.bind(this);
        this.handleHideInfo = this.handleHideInfo.bind(this);
        this.handleAddFavorite = this.handleAddFavorite.bind(this);
        this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
    }

    handleShowInfo() {
        this.setState({'showInfo': true});
    }

    handleHideInfo() {
        this.setState({'showInfo': false});
    }

    handleAddFavorite() {
        this.props.addFavorites(this.state.giphy);
    }

    handleRemoveFavorite() {
        this.props.removeFavorites(this.state.giphy);
    }

    render() {

        const {
            SEARCH,
            FAVORITES
        } = appActions.enums.viewType;

        const info = this.state.showInfo && (
            <InfoPortal>
            <span>
                <p>ID: {this.state.giphy.id}, Slug: {this.state.giphy.slug}, Caption: {this.state.giphy.caption}</p>
                <ButtonStyled onClick={this.handleHideInfo}>Close</ButtonStyled>
            </span>
            </InfoPortal>
        );

        const addButton = this.state.view === SEARCH && (
            <ButtonStyled onClick={this.handleAddFavorite}>Favorite</ButtonStyled>
        );

        const removeButton = this.state.view === FAVORITES && (
            <ButtonStyled onClick={this.handleRemoveFavorite}>Remove</ButtonStyled>
        );

        return (
            <GiphyElementStyled>
                <img
                    slug={this.state.giphy.slug}
                    src={this.state.giphy.images.fixed_height_small.url}
                    alt={this.state.giphy.caption}
                />
                <HrStyled/>
                <ButtonStyled onClick={this.handleShowInfo}>Info</ButtonStyled>
                {info}
                {addButton}
                {removeButton}
            </GiphyElementStyled>
        );
    }
}

export default GiphyElement;