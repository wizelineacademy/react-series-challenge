import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GiphyElement from './GiphyElement';
import ErrorBoundary from './ErrorBoundary';
import appActions from '../actions';

const GiphyList = (props) => {

    const {
        view,
        giphies,
        favorites,
        addFavorites,
        removeFavorites
    } = props;

    const giphiesShown = (view === appActions.enums.viewType.SEARCH)
        ? giphies
        : favorites;

    return (
        <React.Fragment>
            {giphiesShown.map(giphy =>
                <ErrorBoundary key={giphy.id}>
                    <GiphyElement
                        key={giphy.slug}
                        giphy={giphy}
                        view={view}
                        addFavorites={addFavorites}
                        removeFavorites={removeFavorites}
                    />
                </ErrorBoundary>)}
        </React.Fragment>
    );

};

const mapStateToProps = (state) => {
    const {
        view,
        giphies,
        favorites
    } = state;
    return {
        view,
        giphies,
        favorites
    };
};

const mapDispatchToProps = (dispatch) => {
    const {
        addFavorites,
        removeFavorites
    } = appActions.creators;
    return bindActionCreators({
        addFavorites,
        removeFavorites
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);
