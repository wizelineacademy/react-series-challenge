import React from 'react'

const SearchBar = ({ onInput, children: placeholder, className }) => {
    return <input type="search" onInput={ event => onInput(event.target.value) } placeholder={placeholder} className={className} /> 
}

export default SearchBar