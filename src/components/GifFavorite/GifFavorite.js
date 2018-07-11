import React, { Component } from 'react';
import SearchBar from '../../UI/SearchBar';
import GifCards from '../GifCards/GifCards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFunctions from '../../actions/searchValues';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import { StyledGifFavorite } from './GifFavorite.styled'

class GifFavorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedValue: "", 
            searchResults: props.favoritedImages, 
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.favoritedImages !== this.props.favoritedImages){
            this.setState({searchResults: this.props.favoritedImages});
        }
    }

    updateState = (event) => {
        if(event === ""){
            this.setState({searchResults: this.props.favoritedImages})
        } else {
            this.setState({ searchedValue: event })
        }
    }

    handleSearch = () => {
        if(this.state.searchedValue === ""){
            this.setState({searchResults: this.props.favoritedImages})
        } else {
            let newArrayOfResults = Object.keys(this.props.favoritedImages).map((key, index) => {
                return this.props.favoritedImages[index]
            }).filter(word => {
                return word.searchedValue.includes(this.state.searchedValue)});
            
            if(newArrayOfResults !== undefined && newArrayOfResults !== null && newArrayOfResults.length >= 0){
                this.setState({ searchResults: newArrayOfResults });
            } 
        }
    }

    render() {
        return (
            <StyledGifFavorite {...this.props}>
                    <SearchBar 
                    updateState = { this.updateState } 
                    handleSearch = { this.handleSearch } />
        
                <ErrorBoundary>
                    <GifCards 
                    gifData = { this.state.searchResults } 
                    addRemoveGif = { this.props.addRemoveGifFavorites } 
                    searchedValue = { this.props.searchedValue }/>
                </ErrorBoundary>
            </StyledGifFavorite>
        );
    }
}

const mapStateToProps = (state) => {
    const { favoritedImages } = state;
    return {
        favoritedImages
    }
}

const mapDispatchToProps = (dispatch) => {
    const { searchedFavoriteGifs, searchedValue, addRemoveGifFavorites } = SearchFunctions.creators;
    return bindActionCreators( { searchedFavoriteGifs, searchedValue, addRemoveGifFavorites }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GifFavorite);