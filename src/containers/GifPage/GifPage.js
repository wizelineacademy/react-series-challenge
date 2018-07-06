import React, {Component} from 'react';
import GifCard from '../../components/GifCards/GifCards';

const apiURL = "http://api.giphy.com";
const apiTrends = "/v1/gifs/trending";
const apiSearch = "/v1/gifs/search";
const apiKey = "MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p"

class GifPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            gifs: null, 
            searchValue: null
        };
    }

    componentDidMount() {
        fetch(`${apiURL}${apiTrends}?api_key=${apiKey}`)
        //fetch(`http://api.giphy.com/v1/gifs/trending?api_key=MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p`)
        .then(Response => {
                return Response.json().then( (json) => {
                    console.log(json.data);
                    this.setState({ gifs: json.data });
                }
            )
        })
    }

    handleSearch = () => {
        //console.log(event.target.value);
        //const searchParam = event.target.value;
        const { searchValue } = this.state;
        fetch(`${apiURL}${apiSearch}?api_key=${apiKey}&q=${searchValue}`)
        .then(Response => {
                return Response.json().then( (json) => {
                    console.log(json.data);
                    this.setState({ gifs: json.data});
                }
            )
        })
    }

    updateState = (event) => {
        this.setState({searchValue: event})
        console.log(event);
    }

    render() {

        // Apply destructuring
        let arrays = null;
        let gifsObjects = this.state.gifs;
            
        if(gifsObjects !== null){
            arrays = Object.keys(gifsObjects).map((key, index) => {
                let { id } = gifsObjects[index]; 
                let { url } = gifsObjects[index].images.downsized;

                //return (<img key = {id} src = {url} alt = "Cargando..." />);
                return (<GifCard key = {id} imageUrl = {url} />);
            });
            //console.log(arrays.length);
            if(arrays.length === 0){
                arrays = <h1> No se encontraron resultados :( </h1>;
            }
        } 

        return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Favorites</li>
                    </ul>
                </nav>
            </header>
    
            <div>
                <input 
                type="text" 
                placeholder = "Search for awesome gifs" 
                onChange = {(event) => {this.updateState(event.target.value)}} />

                <button
                onClick = {this.handleSearch} > Busca Gifs </button>
            </div>

            {arrays}
        </div>)
    }
}

export default GifPage;