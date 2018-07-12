import React, { Component, Fragment, } from 'react';
import ComponentGif from './ComponentGif';
import { connect } from 'react-redux';
import { removeGifToFavorites, updateTextFilter, } from '../actions/gifsFavorites';
import { ContainerInputText, InputText, } from '../styles/App.style';

class ComponentFavorites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ContainerInputText>
                    <InputText id='searchFav' type="text" placeholder="search" onChange={(e) => {
                        this.props.dispatch(updateTextFilter(e.target.value));
                    }} />
                </ContainerInputText>
                <Fragment>
                    {this.renderGifs()}
                </Fragment>
            </div>
        )
    }

    renderGifs = () => {
        return this.filter().map(x => ComponentGif(x.id, x.title, x.gif, true, () => this.props.dispatch(removeGifToFavorites(x))));
    }

    filter = () => {
        if (!this.props.textFilter) return this.props.favorites;
        return this.props.favorites.filter(x => x.title.toLowerCase().indexOf(this.props.textFilter) > -1);
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.gifsFavorites.favorites,
        textFilter: state.gifsFavorites.textFilter,
    };
};

export default connect(mapStateToProps)(ComponentFavorites);