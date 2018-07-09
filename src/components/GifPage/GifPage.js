import React, {Component} from 'react';
import GifCards from '../GifCards/GifCards'
import './GifPage.css';
import SearchBar from '../../UI/SearchBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFunctions from '../../actions/searchValues';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

const apiURL = "http://api.giphy.com";
const apiTrends = "/v1/gifs/trending";
const apiSearch = "/v1/gifs/search";
const apiKey = "MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p"

class GifPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            gifs: {}, 
            searchValue: "trendy",
        };
    }

    componentDidMount() {      
        
        /*fetch(`${apiURL}${apiTrends}?api_key=${apiKey}`)
        //fetch(`http://api.giphy.com/v1/gifs/trending?api_key=MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p`)
        .then(Response => {
                return Response.json().then( (json) => {
                    //console.log(json.data);
                    let newArray = [];
                    let newObject = {};
                    
                    for(let a = 0; a <= Object.keys(json.data).length - 1; a++){
                        newObject = {};
                        newObject.id = json.data[a].id;
                        newObject.url = json.data[a].images.downsized.url;
                        newArray.push(newObject);
                    }
                    //console.log(newArray);
                    this.setState({ gifs: newArray });
                }
            )
        })*/
        //this.setState({ gifs: this.props.gifs })

        //console.log(this.props.gifs);
        console.log("I Update");
        this.props.requestApiData();
        //this.props.searchedTrendingGifs();
    }

    handleSearch = () => {
        //console.log(event.target.value);
        //const searchParam = event.target.value;
        /*
        const { searchValue } = this.state;
        fetch(`${apiURL}${apiSearch}?api_key=${apiKey}&q=${searchValue}`)
        .then(Response => {
                return Response.json().then( (json) => {
                    //console.log(Object.keys(json.data).length);
                    var newArray = [];
                    var newObject = {};
                    
                    for(var a = 0; a <= Object.keys(json.data).length - 1; a++){
                        newObject = {};
                        newObject.id = json.data[a].id;
                        newObject.url = json.data[a].images.downsized.url;
                        newArray.push(newObject);
                    }
                    this.setState({ gifs: newArray });
                }
            )
        })*/
        console.log("Entra al handler");
        this.props.requestApiDataSearched();
    }

    updateState = (event) => {
        //this.props.updateSearchValue(event.target.value);
        //console.log("EVENTO DE BUSQUEDA", event);
        this.props.updateSearchValue({searchValue: event});
        /*
        if(event !== null && event !== undefined){
            this.setState({ searchValue: event })
        }*/
        //console.log(event);
    }

    render() {
        // Apply destructuring
        //this.props.getTrendingGifs();
        let newArray = [];
        let newObject = {};

        if(this.props.gifs !== undefined ){
        console.log("DATOS MAGICOS", this.props.gifs)
            for(let a = 0; a <= Object.keys(this.props.gifs).length - 1; a++){
                newObject = {};
                newObject.id = this.props.gifs[a].id;
                newObject.url = this.props.gifs[a].images.downsized.url;
                newArray.push(newObject);
            }
        }
        //console.log(newArray);
        //this.setState({ gifs: newArray });

        return(
            <div className = "GifPage">
                <SearchBar updateState = { this.updateState } handleSearch = {this.handleSearch} />
                <ErrorBoundary>
                <GifCards gifData = { newArray } searchedGifs = {this.props.searchedFavoriteGifs} searchedValue = {this.state.searchValue}/> 
                </ErrorBoundary>
                {/*<button onClick = {() => this.props.searchedFavoriteGifs(10)}>HELLO HELLO HELLO</button>*/}
                {/*//loadError = {this.handleError} 
                //loadSuccess = {this.handleOnLoad} */}           
            </div>)
            /*{/*<GifHome 
            gifData = {this.state.gifs} 
            handleSearch = {this.handleSearch} 
            updateState = {this.updateState} />*/
    }
}

const mapStateToProps = (state) => {
    console.log("Estado", state);
    const { gifs } = state;
    return {
        gifs,
    }
}

const mapDispatchToProps = (dispatch) => {
    const { searchedFavoriteGifs, searchedTrendingGifs, searchedSpecifiedGifs, updateSearchValue, getTrendingGifs,requestApiData, requestApiDataSearched } = SearchFunctions.creators;
    return bindActionCreators( { searchedFavoriteGifs, searchedTrendingGifs, searchedSpecifiedGifs, updateSearchValue, getTrendingGifs,requestApiData, requestApiDataSearched }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GifPage);