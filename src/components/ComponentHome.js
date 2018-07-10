import React, { Component, Fragment, } from 'react';
import ComponentGif from './ComponentGif';
import { connect } from 'react-redux';
import { fetchedGifsTrending, fetchedGifsSearch, } from '../actions/gifActions';
import { addGifToFavorites, removeGifToFavorites, } from '../actions/gifsFavorites';
import { ContainerInputText, H4, InputText, } from '../styles/App.style';

class ComponentHome extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchedGifsTrending());
    }

    render() {
        return (
            <div>
                <ContainerInputText>
                    <InputText type="text" placeholder="search" onKeyUp={this.onKeyUp} />
                </ContainerInputText>
                {this.renderLoader()}
                <Fragment>
                    {this.renderGifs()}
                </Fragment>
            </div>
        )
    }

    renderGifs = () => {
        return this.props.gifs.map(x => {
            const isFavorite = this.props.favorites.find(y => y.id == x.id);
            return ComponentGif(x.id, x.title, x.gif, isFavorite, () => {
                if(!isFavorite)this.props.dispatch(addGifToFavorites(x));
                else this.props.dispatch(removeGifToFavorites(x));
                this.forceUpdate();
            });
        });
    }

    renderLoader = () => {
        return (!this.props.loading ? null :
            <H4>Loading...</H4>
        );
    }

    onKeyUp = (e) => {
        if (e.keyCode == 13) {
            this.props.dispatch(fetchedGifsSearch(e.target.value));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifsTrending.gifs,
        favorites: state.gifsFavorites.favorites,
        loading: state.gifsTrending.loading,
    };
};

export default connect(mapStateToProps)(ComponentHome);