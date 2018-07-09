import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import searchGifsActions from '../../actions/searchGifs';
import favoriteGifsActions from '../../actions/favoriteGifs';
import { SearchLabel, SearchInput  } from './Searchgif.styled';

const FAVORITE_GIFS_PATHNAME = '/favorites';
const TRENDING_GIFS_PATHNAME = '/trending';

const SearchGif = withRouter((props) => {

    const onKeyUpSearch = (e) => {
        const { pathname } = props.history.location;
        if (pathname === FAVORITE_GIFS_PATHNAME) {
            props.filterFavoriteGifs(e.target.value);
            console.log('should filter');
        } else if (pathname === TRENDING_GIFS_PATHNAME) {
            props.loadSearchGifs(e.target.value);
            console.log('should search');
        }
    };

    return (
        <div>
            <SearchLabel htmlFor="searchGif">Search <i className="fas fa-search" /></SearchLabel>
            <SearchInput type="text" id="searchGif" onKeyUp={onKeyUpSearch}/>
        </div>
    );
});

const mapDispatchToProps = (dispatch) => {
    const { loadSearchGifs } = searchGifsActions.creators;
    const { filterFavoriteGifs } = favoriteGifsActions.creators;

    return bindActionCreators({
        loadSearchGifs,
        filterFavoriteGifs,
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchGif);