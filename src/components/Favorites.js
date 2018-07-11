import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import GifElement from './GifElement';
import SearchBar from './SearchBar';

const getGifElements = (favoritedGifs) => {
    const components = [];
    for (let key in favoritedGifs) {
        const gif = favoritedGifs[key];
        components.push(
            <GifElement
                gif={gif}
                key={gif.id}
            />
        );
    }
    return components;
};

const Favorites = (props) => {
    const { favoritedGifs } = props;
    return (
        <Fragment>
            <SearchBar/>
            {getGifElements(favoritedGifs)}
        </Fragment>
    )
};

const mapStateToProps = (state) => {
    const { favorites, searchBar } = state;
    const { data } = favorites;
    const { value } = searchBar;
    let favoritedGifs = {};

    if (value.trim().length) {
        for (let key in data) {
            const { title } = data[key];
            if (title.toLowerCase().search(value.toLowerCase()) !== -1) {
                favoritedGifs[key] = data[key];
            }
        }
    } else {
        favoritedGifs = data;
    }

    return {
        favoritedGifs,
    };
};

export default connect(mapStateToProps)(Favorites);