import React, {Component} from 'react';
//import GifHome from '../../components/GifHome/GifHome';
import GifCards from '../GifCards/GifCards'
import './GifPage.css';
import SearchBar from '../../UI/SearchBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFunctions from '../../actions/searchValues';

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
        
        fetch(`${apiURL}${apiTrends}?api_key=${apiKey}`)
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
        })
        //this.props.searchedTrendingGifs();
        
    }

    handleSearch = () => {
        //console.log(event.target.value);
        //const searchParam = event.target.value;
        
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
        })
        //this.props.searchedSpecifiedGifs();
    }

    updateState = (event) => {
        //this.props.updateSearchValue(event.target.value);
        //console.log("EVENTO DE BUSQUEDA", event);
        if(event !== null && event !== undefined){
            this.setState({ searchValue: event })
        }
        //console.log(event);
    }

    render() {
        // Apply destructuring
        return(
            <div className = "GifPage">

                <SearchBar updateState = {this.updateState} handleSearch = {this.handleSearch} />
                <GifCards gifData = { this.state.gifs } searchedGifs = {this.props.searchedFavoriteGifs} searchedValue = {this.state.searchValue}/>
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
    //console.log("ESTADO", state);
    const { searchValue, gifs } = state;
    return {
        searchValue, 
        gifs,
    }
}

const mapDispatchToProps = (dispatch) => {
    const { searchedFavoriteGifs, searchedTrendingGifs, searchedSpecifiedGifs, updateSearchValue } = SearchFunctions.creators;
    return bindActionCreators( { searchedFavoriteGifs, searchedTrendingGifs, searchedSpecifiedGifs, updateSearchValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GifPage);