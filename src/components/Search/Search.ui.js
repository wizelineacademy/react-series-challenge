import React from "react";

const SearchUI = ({ handleChange }) => {
    return (
        <div>
            <span>Escribe el nombre de un gif</span>
            <input id="search" type="text" />
            <button onClick={handleChange}>Realizar busqueda</button>
        </div>
    );
};

export default SearchUI;