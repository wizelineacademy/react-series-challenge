import React from 'react';

const SearchBar = (props) => {

    return (
        <div>
            <input 
            type="text" 
            placeholder = "Search for awesome gifs" 
            onChange = {(event) => {props.updateState(event.target.value)}} />
            <button onClick = { props.handleSearch } > Busca Gifs </button>
        </div>
    );

}

export default SearchBar;