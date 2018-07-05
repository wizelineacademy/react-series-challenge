import React, {Component} from 'react'

class GifPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: null
        };
    }

    componentDidMount() {
        fetch("http://api.giphy.com/v1/gifs/search?api_key=MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p&q=cheeseburgers")
        .then(Response => {
                return Response.json().then( (json) => {
                    //console.log(json.data);
                    this.setState({ gifs: json.data });
                }
            );
        })
    }

    render() {
        //console.log(this.state.gifs);
        let arrays = null;
        
        if(this.state.gifs !==  null){
            arrays = Object.keys(this.state.gifs).map((key, index) => {
            return (<img key = {this.state.gifs[index].id} src = {this.state.gifs[index].images.original.url} alt = "Falla" />);
            });
            console.log(this.state.gifs[0]);
        } else {
            arrays = <h1>Loading</h1>;
        }

        return(
        <div>
            <header>
                <nav>
                    <ul>
                        {arrays}
                        <li>Home</li>
                        <li>Favorites</li>
                    </ul>
                </nav>
            </header>

            <div>
                <input type="text" placeholder = "Search for awesome gifs" />
            </div>
        </div>)
    }
}

export default GifPage;