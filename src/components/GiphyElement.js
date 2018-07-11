import React, {Component} from 'react';
import InfoPortal from './InfoPortal';
import appActions from '../actions';

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
                <button onClick={this.handleHideInfo}>Close</button>
            </span>
            </InfoPortal>
        );

        const addButton = this.state.view === SEARCH && (
            <button onClick={this.handleAddFavorite}>Favorite</button>
        );

        const removeButton = this.state.view === FAVORITES && (
            <button onClick={this.handleRemoveFavorite}>Remove</button>
        );

        return (
            <span>
                <img
                    slug={this.state.giphy.slug}
                    src={this.state.giphy.images.fixed_height_small.url}
                    alt={this.state.giphy.caption}
                />
                <button onClick={this.handleShowInfo}>Info</button>
                {info}
                {addButton}
                {removeButton}
            </span>
        );
    }
}

export default GiphyElement;