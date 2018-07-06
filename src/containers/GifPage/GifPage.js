import React, {Component} from 'react';
import GifHome from '../GifHome/GifHome';

class GifPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchValue: null,
        };
    }

    render() {
        // Apply destructuring
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
            <GifHome />
        </div>)
    }
}

export default GifPage;