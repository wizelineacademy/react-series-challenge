import React, { Component } from "react";

// UI
import UI from "./Favorites.ui";

class Favorites extends Component {
    render() {
        const favoritesList = JSON.parse(localStorage.getItem('favorites'));

        return(
            <UI
                favoritesList={favoritesList}
            />
        );
    }
}
    
  
  export default Favorites;

