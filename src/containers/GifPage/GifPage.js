import React, {Component} from 'react'

class GifPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            variable: 1
        };
    }

    render() {
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
        </div>)
    }
}

export default GifPage;