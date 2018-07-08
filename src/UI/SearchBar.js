import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    return (
        <div className = "SearchBar" >
            <input 
            type="text" 
            placeholder = "Search for awesome gifs" 
            onChange = {(event) => {props.updateState(event.target.value)}} />
            <button onClick = { props.handleSearch } > Busca Gifs </button>
        </div>
    );

}

export default SearchBar;