import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GiphyElement from './GiphyElement';
import ErrorBoundary from './ErrorBoundary';
import appActions from '../actions';

const GiphyList = (props) => {

    const {
        giphies,
        removeFavorites
    } = props;

    return (
        <React.Fragment>
            {giphies.map(giphy =>
                <ErrorBoundary key={giphy.id}>
                    <GiphyElement key={giphy.slug} giphy={giphy} removeFavorites={removeFavorites}/>
                </ErrorBoundary>)}
        </React.Fragment>
    );

};

const mapStateToProps = (state) => {
    const {giphies} = state;
    console.log(state);
    return {giphies};
};

const mapDispatchToProps = (dispatch) => {
    const {removeFavorites} = appActions.creators;

    return bindActionCreators({
        removeFavorites,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);
