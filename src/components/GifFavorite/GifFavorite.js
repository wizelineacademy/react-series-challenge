import React, { Component } from 'react';
import SearchBar from '../../UI/SearchBar';
import GifCards from '../GifCards/GifCards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFunctions from '../../actions/searchValues';

class GifFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedValue: null, 
            searchResults: props.favoritedImages, 
        }
    }

    updateState = (event) => {
        console.log(event);
        this.setState({ searchedValue: event })
    }

    handleSearch = () => {
        console.log(this.props.favoritedImages);
        //const searchParam = event.target.value;
        let newArray = Object.keys(this.props.favoritedImages).map((key, index) => {
            return this.props.favoritedImages[index]
        }).filter(word => {
            console.log("WORD", word);
            console.log("SEARCHEDVALUE", this.state.searchedValue)
            return word.searchedValue.includes(this.state.searchedValue)});
        
        console.log("NUEVO ARRAY", newArray);

        if(newArray !== undefined && newArray !== null && newArray.length >= 0){
            console.log("Entro a actualizar");
            this.setState({ searchResults: newArray });
        } 
        
    }

    render() {
        return (
            <div className = "GifFavorite">
                <SearchBar 
                updateState = { this.updateState } 
                handleSearch = { this.handleSearch } />
    
                <GifCards 
                gifData = { this.state.searchResults } 
                searchedGifs = { this.props.searchedFavoriteGifs } 
                searchedValue = { this.props.searchedValue }/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    const { greeting, favoritedImages } = state;
    return {
        greeting, favoritedImages
    }
}

const mapDispatchToProps = (dispatch) => {
    const { searchedFavoriteGifs, searchedTrendingGifs, searchedSpecifiedGifs, updateSearchValue } = SearchFunctions.creators;
    return bindActionCreators( { searchedFavoriteGifs, searchedTrendingGifs, searchedSpecifiedGifs, updateSearchValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GifFavorite);