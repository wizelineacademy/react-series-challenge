import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import GifElement from './GifElement';

const getGifElements = (data) => {
    const components = [];
    for (let key in data) {
        const gif = data[key];
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
    const { data } = props;
    return (
        <Fragment>
            {getGifElements(data)}
        </Fragment>
    )
};

const mapStateToProps = (state) => {
    const { favorites } = state;
    const { data } = favorites;
    return {
        data
    };
};

export default connect(mapStateToProps)(Favorites);