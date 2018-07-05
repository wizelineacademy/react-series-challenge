import React, {Component} from 'react';
import GifCard from '../../components/GifCards/GifCards';

class GifPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: null
        };
    }

    componentDidMount() {
        //fetch("http://api.giphy.com/v1/gifs/search?api_key=MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p&q=cheeseburger")
        fetch(`http://api.giphy.com/v1/gifs/trending?api_key=MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p`)
        .then(Response => {
                return Response.json().then( (json) => {
                    console.log(json.data);
                    this.setState({ gifs: json.data });
                }
            );
        })
    }

    render() {

        // Apply destructuring
        let arrays = null;
        let gifsObjects = this.state.gifs;
            
        if(gifsObjects !== null){
            arrays = Object.keys(gifsObjects).map((key, index) => {
                let { id } = gifsObjects[index]; 
                let { url } = gifsObjects[index].images.original;

                //return (<img key = {id} src = {url} alt = "Cargando..." />);
                return (<GifCard key = {id} imageUrl = {url} />);
            });
            //console.log(arrays.length);
            if(arrays.length === 0){
                arrays = <h1> No se encontraron resultados :( </h1>;
            }

        } else {
            arrays = <h1>Loading</h1>;
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
                <input type="text" placeholder = "Search for awesome gifs" />
            </div>

            {arrays}
        </div>)
    }
}

export default GifPage;