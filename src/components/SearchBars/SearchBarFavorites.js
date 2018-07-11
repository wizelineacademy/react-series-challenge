import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import favoritesActions from '../../redux/actions/favorites';
import { SearchBarStyle } from '../../styled_component/SearchBar.styled';

export const SearchBarFavorites = (props) =>{
    const {
        favorites,
        isSearchingFavorite,
    } = props
  
    const onInputChange = (term) => {
        let newObj = {}; 
        Object.keys(favorites).map((key)=>{
            if(favorites[key].name.includes(term)){
                newObj[key] = favorites[key];
            }
            return true;
        });
        isSearchingFavorite({term, newObj});
    }

    return (
        <SearchBarStyle  className="SearchBar"
            placeholder={"Search Favorite by name"}
            onChange={(event) => onInputChange(event.target.value)} />
    );
}

function mapStateToProps (state) {
    const { favorites, } = state.favoritesReducer;
    
    return { favorites, };
};

const mapDispatchToProps = (dispatch) => {
  const { isSearchingFavorite } = favoritesActions.creators;

  return bindActionCreators({
    isSearchingFavorite,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarFavorites);
