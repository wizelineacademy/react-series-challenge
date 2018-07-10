import React, { Component, Fragment, } from 'react';
import ComponentGif from './ComponentGif';
import { connect } from 'react-redux';
import { removeGifToFavorites, } from '../actions/gifsFavorites';
import { ContainerInputText, InputText, } from '../styles/App.style';

class ComponentFavorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textFilter: '',
        };
    }

    render() {
        return (
            <div>
                <ContainerInputText>
                    <InputText type="text" placeholder="search" onChange={(e) => this.setState({ textFilter: e.target.value, })} />
                </ContainerInputText>
                <Fragment>
                    {this.renderGifs()}
                </Fragment>
            </div>
        )
    }

    renderGifs = () => {
        return this.filter().map(x => {
            return ComponentGif(x.id, x.title, x.gif, true, () => {
                this.props.dispatch(removeGifToFavorites(x));
                this.forceUpdate();
            });
        });
    }

    filter = () => {
        if (!this.state.textFilter) return this.props.favorites;
        return this.props.favorites.filter(x => x.title.toLowerCase().indexOf(this.state.textFilter) > -1);
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.gifsFavorites.favorites,
    };
};

export default connect(mapStateToProps)(ComponentFavorites);