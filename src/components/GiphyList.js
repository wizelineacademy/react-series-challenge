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
        removeFavorites
    } = props;
    const giphiesShown = (view === appActions.enums.viewType.SEARCH)
        ? giphies
        : favorites;
    console.log(props);
    console.log(giphiesShown);

    return (
        <React.Fragment>
            {giphiesShown.map(giphy =>
                <ErrorBoundary key={giphy.id}>
                    <GiphyElement key={giphy.slug} giphy={giphy} removeFavorites={removeFavorites}/>
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
    const {removeFavorites} = appActions.creators;

    return bindActionCreators({
        removeFavorites,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);
